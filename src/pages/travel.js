import React from 'react';
import { Container } from '@material-ui/core';
import Input from '../components/travel/car/input.js'

const Travel = () => {

    function handleCarTypeCallback () {

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

            </div>

        </Container>
    );
}

export default Travel;
