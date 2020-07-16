import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import ChartDescription from '../reusable/chart-description.js'

const WorldAverages = ({ worldChartData, personAvgData }) => {
   
    const chartVersion = "Chart 2.0"
    const chartInfo = `Graph illustrates the Top 10 Countries with Annual Carbon footprint (in millions) emitted through travel Air flights in year 2018`

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    const options = {
        animationEnabled: true,
        backgroundColor:"transparent",
        legend: 
		{
            fontWeight: "normal",
            markerMargin: 5               
		},
        axisY: {
            titleWrap: true,
            margin: 10,
            interlacedColor: "#F8F1E4",
            gridColor: "lightgrey",
            suffix: " MT",
        },
        axisX: {
            titleWrap: true,
            margin: 10,
            labelAngle: 90,
            interval: 1
        },
        toolTip: {
            enabled: true,      
            animationEnabled: true,
            content: "{label} : <strong>{y} MT</strong>" 
        },
        data: [
            {
                type: "column",
                indexLabelWrap: "true",
                toolTipContent: "<i><strong>{label}</strong></i> : <strong>{y}</strong> MT",
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
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} axisX={"Carbon footprint (Metric Tones)"} axisY={"Countries Name"} />
        </div>
    );
}

export default WorldAverages
