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
                <h1>Heading Home</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tenetur eius ullam atque officiis possimus, eaque consequatur fugit optio placeat. Eius, error aut! Laudantium enim sed doloribus est sunt deleniti quod officiis magni nisi perspiciatis laboriosam quidem ratione assumenda cupiditate pariatur beatae nemo, eos magnam in aspernatur tempora optio. Quam.</p>
                <Link to="/calculator">
                    <Button variant="contained" className="hero-button">Calculate your Carbon footprint</Button>
                </Link>

            </div>
            <div className="hero-image">
                <HistoricalCarbonEmissionChart />
            </div>
        </div>
    </Container>
);

export default (HomeHero);