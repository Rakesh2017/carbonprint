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
        animationEnabled: true,
        backgroundColor: "transparent",
        legend: 
		{
			verticalAlign: "top",
            horizontalAlign: "left",
            fontWeight: "normal",
            markerMargin: 5               
		},
        axisY: {
            titleWrap: true,
            margin: 15,
            interlacedColor: "#F8F1E4",
            gridColor: "lightgrey",
            suffix: " kg",
        },
        axisX: {
            titleWrap: true,
            labelAngle: 0,
            interval: 1,
        },
        data: [
            {
                type: "column",
                // showInLegend: true,
                toolTipContent: "<b><i>{label}</i></b> = <b>{y}</b> Kgs per year",
                legendText: "",
                dataPoints: [
                    { y: parseInt(resultKgs), label: "Your Yearly Carbon footprint", indexLabel:resultKgs+" kgs" },
                    { y: 4683, label: "Typical Average Carbon footprint of drivers in EU", indexLabel:4683+" Kgs" }
                ]
            },
        ]
    }


    return (
        <div className="car-result-container chart">
            
            <h3>How you compare with Average drivers in EU?</h3>
            {/* chart */}
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />

            <p>
                Your Average Carbon footprint for Driving a {type[0].label} Car for <span className="emphasis">{numberWithCommas(distance)} km</span> for 1 year is <span className="emphasis">{numberWithCommas(resultKgs)} Kgs or {resultMTS} Metric Tonnes</span>.
            </p>


        </div>
    );
}

export default Result;
