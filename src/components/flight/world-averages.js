import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import ChartDescription from '../reusable/chart-description.js'

const WorldAverages = ({ worldChartData, personAvgData }) => {
   
    const chartVersion = "Chart 2.0"
    const chartInfo = `Graph illustrates the Top 10 Countries with Annual Carbon footprint (in millions) emitted through travel Air flights in year 2018`

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    const options = {
        title: {
            // text: ""
        },
        axisY: {
            title: "Carbon footprint",
            includeZero: false,
            suffix: " MT",
            interlacedColor: "#F8F1E4",
        },
        axisX: {
            title: "Country Name",
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
        <div className="world-flight-averages">
            {/* chart */}
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
        </div>
    );
}

export default WorldAverages
