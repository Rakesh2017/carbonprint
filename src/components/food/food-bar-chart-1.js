import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import compareCustomValues from '../../global-functions/custom-compare-values.js'
import ChartDescription from '../reusable/chart-description.js';

export default function FoodBarChart1({ checkAddBtn, foodProduct, foodList, foodFrequency }) {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const chartVersion = "Chart 2.0"
    const chartInfo = "Graph illustrates the average Carbon footprints of different foods per year. It contains land use, farming, animal feed, processing, transport, retail and packaging."

    let tempFoodProductArray = []
    let FoodDataForVisualization = []
    if (foodProduct !== undefined && foodFrequency !== undefined && checkAddBtn) {
        document.getElementById("food-graph-1-chart").style.display = "block"
        foodList.forEach(element => {
            if (element.people_avg_carbon > 10) {
                tempFoodProductArray.push({
                    label: element.label,
                    y: element.people_avg_carbon
                })
            }
        });

        FoodDataForVisualization = tempFoodProductArray
        tempFoodProductArray = []
        // sorting data in desc in accordance with y's values
        FoodDataForVisualization.sort(compareCustomValues('y', 'desc'));
    }

    const options = {
        animationEnabled: true,
        // title: {
        //     text: "Carbon Footprints of Various Foods (Kgs)",
        //     // theme: "light2"
        // },
        backgroundColor: "#fff",
        axisY: {
            // title: "Carbon Footprint (Kgs / Year)",
            titleWrap: true,
            margin: 15
        },
        axisX: {
            // title: "food name",
            titleWrap: true,
            margin: 15,
            labelAngle: 0,
            interval: 1
        },
        data: [
            {
                type: "bar",
                dataPoints: FoodDataForVisualization
            }
        ]
    }

    return (
        <div id="food-graph-1-chart" className="chart" style={{ display: "none" }}>
            <h2>Carbon Footprints of Various Foods (Kgs / Year )</h2>
            {FoodDataForVisualization.length > 1 ? <CanvasJSChart options={options} /> : null}
            {/* chart container */}
            <ChartDescription chartNumber ={chartVersion} chartInfo = {chartInfo} axisX = {"Food Name"} axisY = {"Carbon Footprint in Kg/Year"}/>
        </div>
    )
}
