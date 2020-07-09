import React, { useState } from 'react';
import Input from '../components/travel/car/input.js'
import { Container } from '@material-ui/core';
import Result from '../components/travel/car/result.js'


const Travel = () => {

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

    return (
        <Container className="travel-main-container">
            <div id="section-heading">
                {/* heading */}
                <h2>How does your Vehicle emissions impact the Environment?</h2>
            </div>

            {/* logo+input container  */}
            <div className="logo+input-container">
                {/* Logo Container */}
                <div className="logo-container">
                    {/* Car logo */}
                    {/* <img /> logo */}
                    {/* <h3>Car</h3> */}
                </div>

                {/* input container */}
                <div className="input-container">
                    {/* car type */}
                    <Input parentCallback={handleCarTypeCallback} />
                </div>

                {/* result */}
                {checker && <Result type={type} average={average} distance={distance} />}

            </div>

        </Container>
    );
}

export default Travel;
