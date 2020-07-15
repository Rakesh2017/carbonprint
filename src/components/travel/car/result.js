import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react'
import ChartDescription from '../../reusable/chart-description.js'
import numberWithCommas from '../../../global-functions/number-comma.js'

const Result = ({ type, average, distance }) => {
    console.log("Result -> type", type)

    const chartVersion = "Chart 1.0"
    const chartInfo = ``

    /* formula credit: https://ecoscore.be/en/info/ecoscore/co2 */
    const resultKgs = ((type[0].carbon_per_litre * average * distance / 100000) * 12).toFixed(2)
    const resultMTS = (resultKgs / 1000).toFixed(2)

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    const options = {
        animationEnabled : true,
        title: {
            // text: ""
        },

        backgroundColor: "#fff",
        legend: {
            maxWidth: 700,
            itemWidth: 350
        },
        
        data: [
            {
                type: "pie",
                showInLegend: true,
                toolTipContent: "<strong>{indexLabel} = {y} Kgs per year</strong>",
                legendText: "{indexLabel}",
                dataPoints: [
                    { y: resultKgs, indexLabel: "Your Yearly Carbon footprint" },
                    { y: "4683", indexLabel: "Typical Average Carbon footprint of drivers in EU" }
                ]
            }
        ]
    }


    return (
        <div className="car-result-container chart">
            <p>
                Your Average Carbon footprint for Driving a {type[0].label} Car for {numberWithCommas(distance)} km for 1 year is {numberWithCommas(resultKgs)} Kgs or {resultMTS} Metric Tonnes.
            </p>

            <h2>Your Carbon Footprints V/s Average Carbon Footprint of drivers in EU</h2>
            {/* chart */}
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
        </div>
    );
}

export default Result;
