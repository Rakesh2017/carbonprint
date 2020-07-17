import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import GetDistanceBetweenGeoCodes from '../../global-functions/get-distance-between-geo-codes.js'
import numberWithCommas from '../../global-functions/number-comma.js'
import ChartDescription from '../reusable/chart-description.js';
import Fact from '../reusable/facts.js';


const Result = ({ connectingFlight, flightClassOption, takeOff, destination, takeOffAddress, destinationAddress, classType, trip }) => {

    const chartVersion = "Chart 1.0"
    const chartInfo = `Graph illustrates the average carbon released by Aircraft from ${takeOffAddress} to ${destinationAddress} per person. Additionally it shows the one-way vs round trip comparison.`


    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const divisor = 11130
    let para = ""
    let air_distance = ""

    const setOneWayDataForChart = () => {
        const distance = GetDistanceBetweenGeoCodes(takeOff[0].lat, takeOff[1].lng, destination[0].lat, destination[1].lng)
        let temp = []
        flightClassOption.forEach(element => {
            let cfp = element.value * distance / divisor
            cfp = cfp.toFixed(2) * 1000
            cfp = parseFloat(cfp)
            // if it is connecting flight, increase cfp by 25%
            if (connectingFlight === "0") {
                cfp = cfp + ((25 * cfp) / 100)
            }
            if (classType[0].value === element.value && trip === "0") {
                temp.push({ label: element.label, y: cfp, indexLabel: "Your Carbon Footprint: " + cfp + " kgs" })
            } else {
                temp.push({ label: element.label, y: cfp })
            }
        });
        return temp
    }

    // for round trip carbon foot print is doubled
    const setRoundTripDataForChart = () => {
        const distance = GetDistanceBetweenGeoCodes(takeOff[0].lat, takeOff[1].lng, destination[0].lat, destination[1].lng)
        let temp = []
        flightClassOption.forEach(element => {
            let cfp = element.value * distance / divisor
            cfp = cfp.toFixed(2) * 1000 * 2
            cfp = parseFloat(cfp)
            if (connectingFlight === "0") {
                cfp = cfp + ((25 * cfp) / 100)
            }
            if (classType[0].value === element.value && trip === "1") {
                temp.push({ label: element.label, y: cfp, indexLabel: "Your Carbon Footprint: " + cfp + " kgs" })
            } else {
                temp.push({ label: element.label, y: cfp })
            }
        });
        return temp
    }


    // calculate carbon footprint
    const calculateCarbonFootprint = () => {
        const distance = GetDistanceBetweenGeoCodes(takeOff[0].lat, takeOff[1].lng, destination[0].lat, destination[1].lng)
        // calculate footprint
        let cfp = classType[0].value * distance / divisor
        cfp = cfp.toFixed(2)
        
        cfp = parseFloat(cfp)
        
        // if it is connecting flight, increase cfp by 25%
        if (connectingFlight === "0") {
            cfp = cfp + ((25 * cfp) / 100)
            cfp = cfp.toFixed(2)
        }
        
        air_distance = numberWithCommas(distance) + " Kms"
        // determine trip type (0=one way, 1=round)
        let trip_type = '', message = ''
        if (trip === "0") {
            trip_type = "one way trip"
            message = `Your Carbon footprint for ${trip_type} flight from ${takeOffAddress} to ${destinationAddress} is ${cfp} metric tons or ${cfp * 1000} Kgs`
        }
        else {
            trip_type = "round trip"
            message = `Your Carbon footprint for ${trip_type} flight from ${takeOffAddress} to ${destinationAddress} is ${cfp * 2} metric tons or ${cfp * 1000 * 2} Kgs`
        }
        // display message for user

        // set hook message
        para = message
    }



    calculateCarbonFootprint()


    const options = {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#fff",
        axisY: {
            titleWrap: true,
            margin: 10
        },
        axisX: {
            titleWrap: true,
            margin: 10,
            labelAngle: 0,
            interval: 1
        },
        data: [
            {
                type: "bar",
                showInLegend: true,
                legendText: "One Way Trip",
                dataPoints: setOneWayDataForChart()
            },
            {
                type: "bar",
                showInLegend: true,
                legendText: "Round Trip",
                dataPoints: setRoundTripDataForChart()
            },
        ]
    }

    return (
        <div className="flight-result-container ">
            <p>
                {para}
            </p>
            {/* fact container */}
            <Fact className="fact" message={`Distance between ${takeOffAddress} and ${destinationAddress} is ${air_distance}.`} />

            <div class="chart">
                <h2>Carbon Footprints of Flight</h2>
                {/* chart */}
                <CanvasJSChart options={options} />
                {/* chart container */}
                <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} axisX={"Flight Class Type"} axisY={"Carbon Footprint (Kgs)"}/>
            </div>
        </div>
    );
}

export default Result;
