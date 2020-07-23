import React from 'react';
import { Container } from '@material-ui/core';
import ResultChart from '../components/total-result/result-chart.js'

const TotalResult = ({ foodCFP, flightCFP, travelCFP }) => {

    return (
        <Container className="total-result-main-container tab-content">
            <h2 className="full-width">
                Your Total Carbon footprint from food, flight and Car Travel.
            </h2>
            {/* Result chart */}
            <ResultChart foodCFP={foodCFP} flightCFP={flightCFP} travelCFP={travelCFP} />
        </Container>
    );
}

export default TotalResult
