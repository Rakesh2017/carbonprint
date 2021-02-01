import React, { useState, useEffect } from 'react';
import Input from '../components/travel/car/input.js'
import { Container } from '@material-ui/core';
import Result from '../components/travel/car/result.js'
import GreenVehicle from '../components/travel/car/reduce-carbon-footprint/green-vehicle.js'
import DriveBetter from '../components/travel/car/reduce-carbon-footprint/drive-better.js'
import IconTravel from '../images/icons/travel.png'

const Travel = ({parentCallback}) => {

    const [type, setType] = useState()
    const [average, setAverage] = useState()
    const [distance, setDistance] = useState()
    const [checker, setChecker] = useState(false)

    function handleCarTypeCallback(type, average, distance) {
        setType(type)
        setAverage(average)
        setDistance(distance)
        setChecker(true)
    }

    useEffect(() => {
        if (checker) {
            parentCallback({
                type: type,
                average:average,
                distance:distance
            })
        }
        return () => {
            // cleanup
        };
    }, [type, average, checker, distance]);

    return (
        <Container className="travel-main-container tab-content">
            <div id="section-heading" className="full-width">
                {/* heading */}
                <h2>How does your Vehicle emissions impact the Environment?</h2>
            </div>

            {/* logo+input container  */}
            <div className="input-container-travel">
                <div className="container-logo-input">
                {/* Logo Container */}
                    <div className="container-logo">
                        {/* Car logo */}
                        <i className="fas fa-car"></i>
                        {/* <img src={ IconTravel } alt="travel" /> */}
                        {/* <h3>Car</h3> */}
                    </div>
                    {/* input container */}
                    <div className="container-input">
                        {/* car type */}
                        <Input parentCallback={handleCarTypeCallback} />
                    </div>
                </div>
            </div>



            {/* result */}
            {checker && <Result type={type} average={average} distance={distance} />}

            {/* how to reduce carbon footprint */}
            {checker && <div className="how-to-reduce full-width">
                <h2>How to reduce Car carbon footprint?</h2>
            </div>}
            
            {/* 1. green vehicles */}
            {checker && <GreenVehicle />}
            {/* 2. drive better */}
            {checker && <DriveBetter />}

        </Container>
    );
}

export default Travel;
