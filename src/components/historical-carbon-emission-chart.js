import React, { useState, useEffect } from 'react';
import baseUrl from '../database-secrets/secrets.js';
import CanvasJSReact from '../assets/canvasjs.react';

const HistoricalCarbonEmissionChart = () => {

    const historicalCarbonUrl = baseUrl + "/carbon-historical-data"
    const historicalTemperatureUrl = baseUrl + "/temperature-historical-data"
    let temp = [], tempArr = []
    let temp1 = [], tempArr1 = []
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [chartData, setChartData] = useState([])
    const [chartTemperatureData, setChartTemperatureData] = useState([])

    /* fetching data */
    function getLocalCFP() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(historicalCarbonUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {

                let count = 0, next_year = 0, last_value
                data[1].result.forEach(element => {

                    temp = ({
                        x: element.year,
                        y: element.carbon_emission
                    })

                    tempArr.push(temp)

                });
                setChartData(tempArr)

            })
    }

    /* fetching data */
    function getTemperatureCFP() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(historicalTemperatureUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {

                data[1].result.forEach(element => {

                    temp1 = ({
                        x: element.year,
                        y: element.temperature,
                    })

                    tempArr1.push(temp1)
                });
                setChartTemperatureData(tempArr1)
            })
    }

    const options = {
        animationEnabled: true,
        animationDuration: 2500,
        backgroundColor: "transparent",
        theme: "dark1",
        lineDashType: "dash",
        legend: {
            horizontalAlign: "right", // "center" , "right"
            verticalAlign: "top",  // "top" , "bottom"
        },
        title: {
            text: "Atmospheric Carbon Concentration",
            fontColor: "white"
        },
        axisX: {
            stripLines: [
                {
                    value: 1980,
                    opacity: 0.3,
                    label: "Technology Boom (1980)",
                    labelPlacement: "inside",
                    labelAlign: "near",
                    thickness: 2,
                    labelFontColor: "white",
                    color: "white",
                    showOnTop: true,
                    lineDashType: "dot"
                }
            ],
            title: "Years",
            valueFormatString:"####",
            titleFontColor: "white",
            interval: 16,
            // intervalType: "year",
            labelAngle: 90,
            crosshair: {
                enabled: true
            },
        },
        axisY: {
            title: "Carbon in Parts per million (PPM)",
            titleFontColor: "white",
            interval: 50,
            suffix: " ppm",
            crosshair: {
                enabled: true
            },
            stripLines: [
                {
                    startValue: 320,
                    endValue: 407,
                    opacity: 0.7,
                    label: "Drastic increase in recent years",
                    labelPlacement: "inside",
                    labelAlign: "center",
                    labelBackgroundColor: "white"
                }
            ],
            includeZero: true
        },
        axisY2: {
            title: "temperature increase",
            suffix: " °C",
            // includeZero: true,
        },
        data: [
            {
                type: "splineArea",
                showInLegend: true,
                legendText: "Carbon Emission",
                dataPoints: chartData
            },
            {
                type: "column",
                axisYType: "secondary",
                showInLegend: true,
                legendText: "Average temperature increase",
                dataPoints: chartTemperatureData

            }
        ]
    }

    useEffect(() => {
        getLocalCFP()
    }, [])

    useEffect(() => {
        getTemperatureCFP()
    }, [])


    const opitions1 = {}

    return (
        <div>
            {chartTemperatureData.length > 1 && chartData.length > 1 && chartData.length > 2 ? <CanvasJSChart options={options} /> : null}
        </div>
    );
}

export default HistoricalCarbonEmissionChart;