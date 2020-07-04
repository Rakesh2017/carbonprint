import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import GetDistanceBetweenGeoCodes from '../../global-functions/get-distance-between-geo-codes.js'
import numberWithCommas from '../../global-functions/number-comma.js'

const Result = ({ flightClassOption, takeOff, destination, takeOffAddress, destinationAddress, classType, trip }) => {
    console.log("Result -> destination", destination)
    console.log("Result -> takeOff", takeOff)
    console.log("Result -> flightClassOption", flightClassOption)
    console.log("Result -> classType", classType)
    console.log("Result -> trip", trip)

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
            if (classType[0].value === element.value) {
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
            if (classType[0].value === element.value) {
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
        air_distance = numberWithCommas(distance) + " Kms"
        // determine trip type (0=one way, 1=round)
        let trip_type = '', message=''
        if (trip === "0") { 
            trip_type = "one way trip"
            message = `Your Carbon footprint for ${trip_type} flight from ${takeOffAddress} to ${destinationAddress} is ${cfp.toFixed(2)} metric tons or ${cfp.toFixed(2) * 1000} Kgs`
        }
        else { 
            trip_type = "round trip"
            message = `Your Carbon footprint for ${trip_type} flight from ${takeOffAddress} to ${destinationAddress} is ${cfp.toFixed(2)*2} metric tons or ${cfp.toFixed(2) * 1000 *2} Kgs`
        }
        // display message for user
  
        // set hook message
        para = message
    }



    calculateCarbonFootprint()


    const options = {
        animationEnabled: true,
        title: {
            text: "Carbon Footprints of Flight",
            // theme: "light2"
        },
        backgroundColor: "#fff",
        axisY: {
            title: "Carbon Footprint (Kgs)",
            titleWrap: true,
            margin: 10
        },
        axisX: {
            title: "flight Class Type",
            titleWrap: true,
            margin: 10,
            labelAngle: 0,
            interval: 1
        },
        data: [
            {
                type: "bar",
                dataPoints: setOneWayDataForChart()
            },
            {
                type: "bar",
                dataPoints: setRoundTripDataForChart()
            },
        ]
    }

    console.log(options)

    return (
        <div className="flight-result-container">
            <p>
                {para}
            </p>
            <p className="fact-container">
                Distance between {takeOffAddress} and {destinationAddress} is {air_distance}.
            </p>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Result;
