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
                    y: element.people_avg_carbon,
                    indexLabel: element.people_avg_carbon+""
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
        backgroundColor: "transparent",
        legend: 
		{
			dockInsidePlotArea: true,
			verticalAlign: "top",
            horizontalAlign: "left",
            fontWeight: "normal",
            markerMargin: 5               
		},
        axisY: {
            titleWrap: true,
            margin: 15,
            interlacedColor: "#F8F1E4",
            lineColor: "transparent",
            tickLength: 0,
            gridColor: "lightgrey",
            suffix: " kg",
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
                type: "column",
                dataPoints: FoodDataForVisualization
            }
        ]
    }

    return (
        <div id="food-graph-1-chart" className="chart full-width" style={{ display: "none" }}>
            <h3>Carbon Footprints of Various Foods</h3>
            <div className="section-column-2">
                <div className="food-chart-section">
                    {FoodDataForVisualization.length > 1 ? <CanvasJSChart options={options} /> : null}
                    {/* chart container */}
                    <ChartDescription chartNumber ={chartVersion} axisX = {"Food Name"} axisY = {"Carbon Footprint in Kg/Year"} chartInfo={chartInfo} />
                </div>
            </div>
        </div>
    )
}
