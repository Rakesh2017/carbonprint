import React from 'react';
import Feature1 from '../../images/icons/FootprintCalculator.png';
import Feature2 from '../../images/icons/ImapctsOfCarbon.png';
import Feature3 from '../../images/icons/ReductionMeasure.png';
import { Link } from 'react-router-dom';

import {
    Container,
  } from '@material-ui/core';

const homeFeatures = () => (
    <Container class="home-features-container">
        <h2>Features</h2>

        <div class="home-features">
            <Link to ="./calculator" class="features feature1" >
                <img src={Feature1} />
                <h3>Footprint Calculator</h3>
            </Link>
    
            <Link to="./carbon-impact" class="features feature2">
                <img src={Feature2} />
                <h3>Impacts of Carbon</h3>
            </Link>
    
            <div class="features feature3">
                <img src={Feature3} />
                <h3>Reduction Measures</h3>
            </div>

            <p>

            </p>
        </div>

    </Container>
);

export default (homeFeatures);