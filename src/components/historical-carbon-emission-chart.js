import React, { useState, useEffect } from 'react';
import baseUrl from '../database-secrets/secrets.js';
import CanvasJSReact from '../assets/canvasjs.react';

const HistoricalCarbonEmissionChart = () => {

    const historicalCarbonUrl = baseUrl + "/carbon-historical-data"
    const historicalTemperatureUrl = baseUrl + "/temperature-historical-data"
    let temp = [], tempArr = []
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

                data[1].result.forEach(element => {

                    temp = ({
                        x: new Date(element.year),
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
        let tempArr1 = [], temp1
        const headers = { 'Content-Type': 'application/json' }
        fetch(historicalTemperatureUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {

                data[1].result.forEach(element => {

                    temp1 = ({
                        x: new Date(element.year),
                        y: element.temperature
                    })
                    tempArr1.push(temp1)
                });
               // setChartTemperatureData(tempArr)
                //console.log("getTemperatureCFP -> tempArr", tempArr)
                console.log("getTemperatureCFP -> tempArr1", tempArr1)
                return [tempArr1]
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
            title: "Years",
            titleFontColor: "white",
            interval: 15,
            intervalType: "year",
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
            titleFontColor: "#51CDA0",
            // interval: 20,
            suffix: " c",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0",
            includeZero: true
        },
        data: [
            {
                type: "splineArea",
                showInLegend: true,
                legendText: "Carbon Emission",
                dataPoints: chartData
            },
            {
                type: "splineArea",
                axisYType: "secondary",
                showInLegend: true,
                legendText: "Average temperature increase",
                dataPoints: getTemperatureCFP() 

            }
        ]
    }

    useEffect(() => {
        getLocalCFP()
        //getTemperatureCFP()
    }, [])


    return (
        <div>
            {console.log("HistoricalCarbonEmissionChart -> chartData", chartData)}
            {chartData.length > 2 ? <CanvasJSChart options={options} /> : null}
        </div>
    );
}

export default HistoricalCarbonEmissionChart;
