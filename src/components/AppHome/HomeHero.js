import React from 'react';
import HistoricalCarbonEmissionChart from '../home/historical-carbon-emission-chart.js'
import {
    Container,
    Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const HomeHero = () => (
    <Container>
        <div className="hero-container">
            <div className="hero-text">
                <h1 class="header-text">My Carbon Footprint</h1>
                <p>A Carbon footprint is the number of greenhouse gases, primarily carbon dioxide, released into the atmosphere by your daily activities.</p>
                <p>Carbon Print helps you to calculate your carbon emissions produced by food, travelling etc. Calculate your carbon footprint in few minutes.
                </p>
                <Link to="/calculator">
                    <Button variant="contained" className="hero-button" aria-label="Calculate carbon footprint">Calculate your Carbon footprint</Button>
                </Link>

            </div>
            <div className="hero-image">
                <HistoricalCarbonEmissionChart />
            </div>
        </div>
    </Container>
);

export default (HomeHero);