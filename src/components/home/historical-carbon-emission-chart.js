import React, { useState, useEffect } from 'react';
import baseUrl from '../../database-secrets/secrets.js';
import CanvasJSReact from '../../assets/canvasjs.react';
import ChartDescription from '../reusable/chart-description.js'
import LoadingIndicator from '../loading/loading.js'
import Toaster from '../toast/toaster.js'
import { trackPromise } from 'react-promise-tracker'
import { ToastContainer } from 'react-toastify';

const HistoricalCarbonEmissionChart = () => {

    const historicalCarbonUrl = baseUrl + "/carbon-historical-data"
    const historicalTemperatureUrl = baseUrl + "/temperature-historical-data"
    let temp = [], tempArr = []
    let temp1 = [], tempArr1 = []
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [chartData, setChartData] = useState([])
    const [chartTemperatureData, setChartTemperatureData] = useState([])

    const chartVersion = "Chart 2.0"
    const chartInfo = "This chart illustrates the increase in Earth's temperature in relation with the atmospheric carbon concentration between the years 1856-2016."

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
        trackPromise(
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
                }).catch((err) =>
                    Toaster("cannot load charts", false)
                ))
    }

    const options = {
        height: 350,
        animationEnabled: true,
        animationDuration: 2500,
        backgroundColor: "transparent",
        theme: "dark1",
        lineDashType: "dash",
        toolTip: {
            shared: true
        },
        legend: {
            horizontalAlign: "center",
            verticalAlign: "bottom",
            fontWeight: "normal"
        },
        axisX: {
            stripLines: [
                {
                    value: 1980,
                    opacity: 0.5,
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

            titleFontSize: 15,
            margin: 20,
            valueFormatString: "####",
            titleFontColor: "white",
            interval: 16,
            labelFontSize: 12,
            labelMaxWidth: 50,
            labelWrap: false,
            tickLength: 5,
            prefix: "\t ",
            suffix: "   ",
            // intervalType: "year",
            labelAngle: 90,
            crosshair: {
                enabled: true
            },
        },
        axisY: {
            // title: "Carbon in Parts per million",
            titleFontColor: "white",
            interval: 50,
            prefix: "",
            suffix: " ppm",
            titleFontSize: 15,
            labelFontSize: 12,
            gridColor: "#b0bfbcba",
            lineColor: "transparent",
            tickLength: 0,
            crosshair: {
                enabled: true
            },
            stripLines: [
                {
                    startValue: 340,
                    endValue: 407,
                    opacity: 0.8,
                    label: "Drastic increase in recent years",
                    labelPlacement: "inside",
                    labelAlign: "center",
                    labelBackgroundColor: "white",
                    opacity: "0.7"
                }
            ],
            includeZero: true
        },
        axisY2: {
            // title: "temperature increase",
            suffix: " °C",
            labelFontSize: 12,
            titleFontSize: 15,
            thickness: 4,
            gridColor: "#b0bfbcba",
            lineColor: "transparent",
            tickLength: 0,
        },
        data: [
            {
                type: "splineArea",
                showInLegend: true,
                legendText: "Carbon Emission",
                color: "skyblue",
                toolTipContent: "<i><strong>{x}</strong>Y</i> : <strong>{y}</strong> MT Carbon Footprint",
                dataPoints: chartData
            },
            {
                type: "column",
                axisYType: "secondary",
                showInLegend: true,
                toolTipContent: "<i><strong>{x}</strong>Y</i> : <strong>{y}</strong> °C",
                legendText: "Average temperature increase",
                dataPoints: chartTemperatureData,
                color: "lightcoral"

            }

        ]
    }

    useEffect(() => {
        getLocalCFP()
    }, [])

    useEffect(() => {
        getTemperatureCFP()
    }, [])

    return (

        <div className="chart" id="historical-chart">
            <h2>Atmospheric Carbon Concentration</h2>

            {/* loading */}
            <LoadingIndicator />
            <ToastContainer />
            {chartTemperatureData.length > 1 && chartData.length > 1 && chartData.length > 2 && <CanvasJSChart options={options} />}
            {/* chart container */}

            {/* {chartTemperatureData.length > 1 && chartData.length > 1 && chartData.length > 2 ? <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} /> : null} */}

            {/*  axisX={"Years"} axisY={"Carbon in Parts per million"} axisY2={"Temperature Increase"} */}

        </div>
    );
}

export default HistoricalCarbonEmissionChart;