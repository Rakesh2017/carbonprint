import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import ChartDescription from '../reusable/chart-description.js'

const WorldAverages = ({ worldChartData, personAvgData }) => {
   
    const chartVersion = "Chart 2.0"
    const chartInfo = `Graph illustrates the Top 10 Countries with Annual Carbon footprint (in millions) emitted through travel Air flights in year 2018`

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    const options = {
        axisY: {
            includeZero: false,
            suffix: " MT",
            interlacedColor: "#F8F1E4",
        },
        axisX: {
            labelAngle: 90
        },
        toolTip: {
            enabled: true,      
            animationEnabled: true,
            content: "{label} : <strong>{y} MT</strong>" 
        },
        data: [
            {
                type: "line",
                dataPoints: personAvgData,
                showInLegend: true,
                legendText: "Carbon in Million Tonnes (Year 2018)",
            }
        ]
    }


    return (
        <div className="world-flight-averages chart">
            <h2>Carbon Footprint of top 10 Countries (in Million Tonnes)</h2>
            {/* chart */}
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} axisX={"Country Name"} axisY={"Carbon Footprint"} />
        </div>
    );
}

export default WorldAverages
