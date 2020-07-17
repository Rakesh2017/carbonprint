import React, { useState, useEffect } from 'react';
import baseUrl from '../../database-secrets/secrets.js';
import CanvasJSReact from '../../assets/canvasjs.react';
import ChartDescription from '../reusable/chart-description.js';
import Fact from '../reusable/facts.js';

const ReduceFoodCfpEatVeg = () => {

    const foodUrl = baseUrl + "/eat-veg-carbon-footprints"
    let temp = []
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [chartData, setChartData] = useState([])

    const chartVersion = "Chart 4.0"
    const chartInfo = "Graph illustrates the average release of carbon in tonnes by diet type of a person in one year."


    /* fetching data */
    function getDietCFP() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(foodUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {

                data[1].result.forEach(element => {

                    temp = [
                        { label: "Meat Lovers", y: element.meat_lover, indexLabel: element.meat_lover+"" },
                        { label: "Non-Veg", y: element.average, indexLabel: element.average+"" },
                        { label: "No-Beef", y: element.no_beef, indexLabel: element.no_beef+"" },
                        { label: "Vegetarian", y: element.vegetarian, indexLabel: element.vegetarian+"" },
                        { label: "Vegan", y: element.vegan, indexLabel: element.vegan+"" }
                    ]
                });
                setChartData(temp)

            })

        // [fetch ends here]    
    }

    const options = {
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: "transparent",
        legend:
        {
            fontWeight: "normal",
            dockInsidePlotArea: true,
            markerMargin: 5,
            verticalAlign: "top",
            horizontalAlign: "right",
        },
        axisY: {
            titleWrap: true,
            margin: 10,
            interlacedColor: "#F8F1E4",
            suffix: " MT",
            gridColor: "lightgrey",
        },
        axisX: {
            titleWrap: true,
            margin: 10,
            labelAngle: 0,
            interval: 1,
        },
        data: [
            {
                type: "column",
                showInLegend: true,
                toolTipContent: "<i><strong>{label}</strong></i> : <strong>{y}</strong> MT",
                name: "Carbon Footprint Metric Tonnes",
                dataPoints: chartData
            }
        ]
    }

    useEffect(() => {
        getDietCFP()
    }, [])


    return (
        <div className="reduce-food-cfp-container reduce-food-cfp-container-eat-veg chart">
            <h2>Eat Vegetarian</h2>
            <h3>Food Carbon footprints by diet type (tonnes/person)</h3>
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} axisX={"Diet Type"} axisY={"Carbon emission in metric tonnes(MT)"} />

            <div className="explanation-container">

                {/* Fact container */}
                <Fact message="Livestock farming produces from 20% to 50% of all man-made greenhouse gas emissions." />
                <p>
                    Graph 3.0 chart shows that a meat lover has the highest carbon footprint at 3.3 tons of greenhouse gas emissions. A vegan diet has the lowest carbon footprint at just 1.5 tons carbon. You can reduce your food carbon footprint by a quarter just by cutting down on red meats such as beef and lamb. While, The carbon footprint of a vegetarian diet is about half that of a meat-lover’s diet.
                </p>
            </div>

        </div>
    );
}

export default ReduceFoodCfpEatVeg;
