import React, { useEffect } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import ChartDescription from '../reusable/chart-description.js';


export default function FoodUserBarChart({ checkAddBtn, foodList }) {

    console.log("working")
    let userCarbonArray = []
    let tempUserCarbonArray = []

    let avgCarbonArray = []
    let tempAvgCarbonArray = []

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartVersion = "Chart 1.0"
    const chartInfo = "This graph illustrates the comparison between carbon footprint generated by you vs average carbon footprint of specified food generated by world per year."


    if (checkAddBtn) {
        //document.getElementById("food-user-multiple-bar-chart").style.display = "block"
        foodList.forEach(element => {
            tempUserCarbonArray.push({
                label: element.product,
                y: element.userCarbonPrint,
                indexLabel: element.userCarbonPrint + ""
            })
            tempAvgCarbonArray.push({
                label: element.product,
                y: element.avgCarbonPrint,
                indexLabel: element.avgCarbonPrint + ""
            })
        });

        userCarbonArray = tempUserCarbonArray
        avgCarbonArray = tempAvgCarbonArray
        tempAvgCarbonArray = tempUserCarbonArray = []

        if (foodList.length == 0) {
            //document.getElementById("food-user-multiple-bar-chart").style.display = "none"
        }

    }

    useEffect(() => {
        if (checkAddBtn) {
            document.getElementById("food-user-multiple-bar-chart").style.display = "block"
        }
        if (foodList.length == 0) {
            document.getElementById("food-user-multiple-bar-chart").style.display = "none"
        }
        return () => {
            // cleanup
        };
    }, [checkAddBtn, foodList]);



    const options = {
        height: 300,
        dataPointMaxWidth: 40,
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: "transparent",
        legend:
        {
            fontWeight: "normal",
            markerMargin: 5
        },
        axisY: {
            titleWrap: true,
            margin: 10,
            interlacedColor: "#F8F1E4",
            suffix: " kg",
            gridColor: "lightgrey",
            lineColor: "transparent",
            tickLength: 0,
        },
        axisX: {
            titleWrap: true,
            margin: 10,
            labelAngle: 90,
            interval: 1,
        },
        data: [{
            type: "column",
            showInLegend: true,
            toolTipContent: "<i><strong>{label}</strong></i> : <strong>{y}</strong> Kgs per year",
            name: "Your Carbon Footprint",
            dataPoints: userCarbonArray
        },
        {
            type: "column",
            showInLegend: true,
            toolTipContent: "<i><strong>{label}</strong></i> : <strong>{y}</strong> Kgs per year",
            name: "Average Carbon footprint of world",
            dataPoints: avgCarbonArray
        }]
    }

    return (
        <div id="food-user-multiple-bar-chart" className="chart" style={{ display: "none" }}>
            <h3>How you compare with the world.</h3>
            {userCarbonArray.length >= 1 && <CanvasJSChart options={options} />}
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} axisX={"Food Name"} axisY={"Carbon Footprint in Kg/Year"} />
        </div>
    )
}