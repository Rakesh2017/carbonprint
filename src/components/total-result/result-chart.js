import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react'
import GetDistanceBetweenGeoCodes from '../../global-functions/get-distance-between-geo-codes'
import addComma from '../../global-functions/number-comma.js'

const ResultChart = ({ foodCFP, flightCFP, travelCFP }) => {

    // declarations
    const divisor = 11130
    var CanvasJSChart = CanvasJSReact.CanvasJSChart

    // get travel carbon foot print
    const getTravelCFP = () => {
        if (travelCFP !== null && travelCFP !== undefined) {
            const resultKgs = ((travelCFP.type[0].carbon_per_litre * travelCFP.average * travelCFP.distance / 100000) * 12).toFixed(0)
            let temp
            temp = { y: resultKgs * 1 }
            return temp
        } else {
            return [{y:0}]
        }
    }

    // get flight carbon foot print
    const getFlightCFP = () => {
        if (flightCFP !== null && flightCFP !== undefined) {
            let temp
            // get distance
            const distance = GetDistanceBetweenGeoCodes(flightCFP.takeOff[0].lat, flightCFP.takeOff[1].lng, flightCFP.destination[0].lat, flightCFP.destination[1].lng)

            let cfp = flightCFP.classType[0].value * distance / divisor
            cfp = cfp.toFixed(2)

            cfp = parseFloat(cfp)

            // if it is connecting flight, increase cfp by 25%
            if (flightCFP.connectingFlight === "0") {
                cfp = cfp + ((25 * cfp) / 100)
                cfp = cfp.toFixed(2)
            }

            //air_distance = numberWithCommas(distance) + " Kms"
            // determine trip type (0=one way, 1=round)
            if (flightCFP.trip_type === "0") {
                temp = { label: "Air travel", y: cfp * 1000 }
            }
            else {
                temp = { y: cfp * 2000 }
            }
            return temp
        } else {
            return [{y:0}]
        }
    }



    // get total carbon footprint of user
    const getFoodCFP = () => {
        let total = 0
        let temp
        if (foodCFP !== undefined) {
            foodCFP.forEach(element => {
                total = total + element.userCarbonPrint
            })
            temp = { y: total }
            return temp
        } else {
            return [{y:0}]
        }
    }

    // getting chart values
    let foodY = 0, flightY = 0, travelY = 0
    foodY = getFoodCFP().y
    if (getFlightCFP().y !== undefined) flightY = getFlightCFP().y
    if (getTravelCFP().y !== undefined) travelY = getTravelCFP().y


    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        legend:
        {
            fontWeight: "normal",
            markerMargin: 5
        },
        axisY: {
            titleWrap: true,
            margin: 15,
            interlacedColor: "#F8F1E4",
            gridColor: "lightgrey",
            suffix: " kg",
            lineColor: "transparent",
            tickLength: 0,
        },
        axisX: {
            titleWrap: true,
            labelAngle: 90,
            interval: 1,
        },
        data: [
            {
                showInLegend: true,
                toolTipContent: "<i><strong>{label}</strong></i> : <strong>{y}</strong> Kgs per year",
                legendText: "Carbon footprint in Kgs",
                dataPoints: [
                    { label: "Food", y: foodY, indexLabel: foodY + " kgs" },
                    { label: "Car Travel", y: travelY, indexLabel: travelY + " kgs" },
                    { label: "Air travel", y: flightY, indexLabel: flightY + " kgs" },
                ]
            }
        ]
    }

    return (
        <div className="total-result-chart-container full-width">
            <CanvasJSChart options={options} />
            <div className="total-result-info">
                <p>Your total carbon footprint from Food is <span>{addComma(foodY)} Kgs</span></p>
                <p>Your total carbon footprint from Air Travel is <span>{addComma(flightY)} Kgs</span></p>
                <p>Your total carbon footprint from Car Travel is <span>{addComma(travelY)} Kgs</span></p>
                <p>Your Total carbon footprint from Food, Air and travel is <span>{addComma(foodY + flightY + travelY)} Kgs</span></p>
            </div>
        </div>
    );
}

export default ResultChart
