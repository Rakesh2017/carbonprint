import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import compareCustomValues from '../global-functions/custom-compare-values.js'

export default function FoodBarChart1({ checkAddBtn, foodProduct, foodList, foodFrequency }) {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        title: {
            text: "Carbon Footprints of Various Foods (Kgs)",
            theme: "light2"
        },
        backgroundColor: "#fff",
        axisY: {
            title: "Carbon Footprint (Kgs)",
            titleWrap: true,
            margin: 10
        },
        axisX: {
            title: "food name",
            titleWrap: true,
            margin: 10,
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
            <CanvasJSChart options={options} />
            <p id="food-chart-version" id="chart-version">Chart 2.0</p>
            <p className="food-graph-explain graph-explain">
             <i>Graph illustrates the average Carbon footprints of different foods per year
                It contains land use, farming, animal feed, processing, transport, retail and packaging.
             </i>
            </p>
        </div>
    )
}
