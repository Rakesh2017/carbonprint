import React from 'react';
import Feature1 from '../../images/icons/FootprintCalculator.png';
import Feature2 from '../../images/icons/ImapctsOfCarbon.png';
import Feature3 from '../../images/icons/ReductionMeasure.png';
import { Link } from 'react-router-dom';

import {
    Container,
  } from '@material-ui/core';

const homeFeatures = () => (
    <Container className="home-features-container">
        <h2>Features</h2>

        <div className="home-features">

            <div className="features feature1">
                <Link to ="./calculator">
                    <i className="fas fa-calculator"></i>
                    {/* <img src={Feature1} alt="carbon footprint calculator" /> */}
                    <h3>Carbon Footprint Calculator</h3>
                </Link>
            </div>
    
            <div className="features feature2">
                <Link to="./carbon-impact">
                    <i className="fas fa-globe-americas"></i>
                    {/* <img src={Feature2} alt="Impact of carbon" /> */}
                    <h3>Impacts of Carbon</h3>
                </Link>
            </div>
    
            <div className="features feature3">
                <i className="fas fa-chart-area"></i>
                {/* <img src={Feature3} alt="Reduction Measures" /> */}
                <h3>Reduction Measures</h3>
            </div>

        </div>

    </Container>
);

export default (homeFeatures);