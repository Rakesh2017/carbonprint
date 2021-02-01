import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TakeOffInput from '../components/flight/take-off-input.js'
import DestinationInput from '../components/flight/destination-input.js'
import ClassDropdown from '../components/flight/class-dropdown.js'
import RadioTripChoice from '../components/flight/radio-trip-choice.js'
import Result from '../components/flight/result.js'
import baseUrl from '../database-secrets/secrets.js';
import WorldAverages from '../components/flight/world-averages.js'
import NonStopFlight from '../components/flight/reduce-carbon-footprint/non-stop-flight.js'
import EconomyClassFlight from '../components/flight/reduce-carbon-footprint/economy-class-flight.js'
import RadioConnectingFlight from '../components/flight/radio-connecting-flight.js'
import flightIcon from '../images/icons/Flight.png'

const Flight = ({ parentCallback }) => {
    // console.log("PLACE_API_KEY", process.env.PLACE_API_KEY)

    // variable declaration
    const [takeOff, setTakeOff] = useState()
    const [takeOffAddress, setTakeOffAddress] = useState("")
    const [destination, setDestination] = useState()
    const [destinationAddress, setDestinationAddress] = useState("")
    const [classType, setClassType] = useState()
    const [trip, setTrip] = useState() //by default 0 = "one way trip"
    const [connectingFlight, setConnectingFlight] = useState() //by default 0 = "no"
    const [resultLoader, setResultLoader] = useState(false)
    const [flightClassOption, setFlightClassOption] = useState([])
    const worldCFPUrl = baseUrl + "/world-flight-carbon-footprints"
    let temp = [], tempArr = []
    const [worldChartData, setWorldChartData] = useState()
    const [personAvgData, setPersonAvgData] = useState()
    const [resultMessage, setResultMessage] = useState('')

    /* fetching data */
    function getWorldCarbonFootprint() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(worldCFPUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {
                // inserting world data
                data[1].result.forEach(element => {
                    temp = ({
                        label: element.country,
                        y: element.world
                    })
                    tempArr.push(temp)
                });
                setWorldChartData(tempArr)
                temp = tempArr = []
                // inserting person data
                data[1].result.forEach(element => {
                    temp = ({
                        label: element.country,
                        y: element.people,
                        indexLabel: element.people + ""
                    })
                    tempArr.push(temp)
                });
                setPersonAvgData(tempArr)
            })
    }


    // calculate carbon footprint
    const calculateCarbonFootPrint = () => {
        if (takeOff !== undefined && destination !== undefined && classType !== undefined && trip !== undefined && connectingFlight !== undefined) {
            setResultLoader(true)
        }
    }

    useEffect(() => {
        calculateCarbonFootPrint()
        return () => {
            // cleanup
        };
    }, [takeOff, destination, classType, trip, connectingFlight]);

    useEffect(() => {
        getWorldCarbonFootprint()
        return () => {
            // cleanup
        };
    }, []);

    // callback from take off to set lat lng
    const handleTakeOffCallback = (data, address) => {
        setTakeOff(data)
        setTakeOffAddress(address)
    }

    // callback from take off to set lat lng
    const handleDestinationCallback = (data, address) => {
        setDestination(data)
        setDestinationAddress(address)
    }

    // callback from drop down (flight class type)
    const handleDropDownCallback = (data, options) => {
        setClassType(data)
        setFlightClassOption(options)
    }

    // callback from trip choice (one way ur return)
    const handleTripChoiceCallback = (data) => {
        setTrip(data)
    }

    // callback from trip choice (one way ur return)
    const handleConnectingFlightCallback = (data) => {
        setConnectingFlight(data)
    }

    useEffect(() => {
        if (resultLoader) {
            parentCallback({
                trip_type: trip,
                takeOff: takeOff,
                destination: destination,
                connectingFlight: connectingFlight,
                classType: classType
            })
        }
        return () => {
            // cleanup
        };
    }, [resultLoader, takeOff, destination, classType, trip, connectingFlight, takeOffAddress, destinationAddress]);

    return (
        <Container className="flight-main-container tab-content">
            <div id="section-heading" className="full-width">
                {/* heading */}
                <h2>How do your Air Flight Travel impact the Environment?</h2>
            </div>

            {/* logo+input container  */}
            <div className="input-container-flight">

                <div className="container-logo-input">
                    {/* Logo Container */}
                    <div className="container-logo">
                        {/* flight logo */}
                        <i className="fas fa-plane-departure"></i>
                        {/* <img src={ flightIcon } alt="Flight Icon" /> */}
                        {/* <h3>Air Flight</h3> */}
                    </div>

                    {/* input container */}
                    <div className="container-input">
                        {/* input 1 */}
                        <TakeOffInput parentCallback={handleTakeOffCallback} />
                        {/* input 2 */}
                        <DestinationInput parentCallback={handleDestinationCallback} />


                        {/* trip choice */}
                        <RadioConnectingFlight parentCallback={handleConnectingFlightCallback} />

                        {/* flight class choice  */}
                        <ClassDropdown parentCallback={handleDropDownCallback} />
                        {/* trip choice */}
                        <RadioTripChoice parentCallback={handleTripChoiceCallback} />

                    </div>

                </div>

                <p>{resultMessage}</p>

            </div>



            {/* show result */}
            {resultLoader && <Result takeOff={takeOff} destination={destination} takeOffAddress={takeOffAddress} destinationAddress={destinationAddress} classType={classType} trip={trip} flightClassOption={flightClassOption} connectingFlight={connectingFlight} parentCallback={data => setResultMessage(data)} />}

            {/* show world averages */}
            {resultLoader && worldChartData !== undefined && personAvgData !== undefined && <WorldAverages worldChartData={worldChartData} personAvgData={personAvgData} />}

            {/* reduce carbon footprint */}

            {resultLoader && <div className="how-to-reduce full-width">
                <h2>How to reduce Flight carbon footprint?</h2>
            </div>}

            {/* reduce method 1 */}
            {resultLoader && <NonStopFlight />}
            {/* reduce method 2 */}
            {resultLoader && <EconomyClassFlight />}


        </Container>
    );
}

export default Flight;
