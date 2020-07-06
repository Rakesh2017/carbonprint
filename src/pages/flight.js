import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import TakeOffInput from '../components/flight/take-off-input.js'
import DestinationInput from '../components/flight/destination-input.js'
import ClassDropdown from '../components/flight/class-dropdown.js'
import RadioTripChoice from '../components/flight/radio-trip-choice.js'
import Result from '../components/flight/result.js'

const Flight = () => {

    // variable declaration
    const [takeOff, setTakeOff] = useState()
    const [takeOffAddress, setTakeOffAddress] = useState("")
    const [destination, setDestination] = useState()
    const [destinationAddress, setDestinationAddress] = useState("")
    const [classType, setClassType] = useState()
    const [trip, setTrip] = useState() //by default 0 = "one way trip"
    const [resultLoader, setResultLoader] = useState(false) 
    const [flightClassOption, setFlightClassOption] = useState([]) 


    // calculate carbon footprint
    const calculateCarbonFootPrint = () => {
        if (takeOff !== undefined && destination !== undefined && classType !== undefined && trip !== undefined) {
            setResultLoader(true)
        }
    }

    useEffect(() => {
        calculateCarbonFootPrint()
        return () => {
            // cleanup
        };
    }, [takeOff, destination, classType, trip]);

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


    return (
        <Container className="flight-main-container">
            <div id="section-heading">
                {/* heading */}
                <h2>How do your Air Flight Travel impact the Environment?</h2>
            </div>
            
            {/* logo+input container  */}
            <div className="logo+input-container">
                {/* Logo Container */}
                <div className="logo-container">
                    {/* flight logo */}
                    {/* <img /> logo */}
                    {/* <h3>Air Flight</h3> */}
                </div>

                {/* input container */}
                <div className="input-container">
                    {/* input 1 */}
                    <TakeOffInput parentCallback={handleTakeOffCallback} />
                    {/* input 2 */}
                    <DestinationInput parentCallback={handleDestinationCallback} />
                </div>

                {/* flight class choice  */}
                <ClassDropdown parentCallback={handleDropDownCallback} />
                {/* trip choice */}
                <RadioTripChoice parentCallback={handleTripChoiceCallback} />

                {/* show result */}
                {resultLoader ? <Result takeOff={takeOff} destination={destination} takeOffAddress={takeOffAddress} destinationAddress={destinationAddress} classType={classType} trip={trip} flightClassOption={flightClassOption} /> : null }

            </div>

        </Container>
    );
}

export default Flight;
