import React, { useState, useEffect } from 'react';
import baseUrl from '../../database-secrets/secrets.js';
import CanvasJSReact from '../../assets/canvasjs.react';

const ReduceFoodCfpEatLocal = () => {

    const foodUrl = baseUrl + "/eat-local-carbon-footprints"
    let temp = []
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [chartData, setChartData] = useState([])

    /* fetching data */
    function getLocalCFP() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(foodUrl, { headers })
            .then(response =>
                response.json())
            .then(data => {
                
                data[1].result.forEach(element => {
                   
                    temp = [
                        { name: "Supply Chain transport", y: element.supply_chain_transport },
                        { name: "Whole Sale Retail", y: element.wholesale_retail },
                        { name: "Production", y: element.production },
                        { name: "Final Delivery Transport", y: element.final_delivery_transport }
                    ]
                });
                setChartData(temp)
            })

        // [fetch ends here]    
    }

    const options = {
        animationEnabled: true,
        title: {
            text: "Percentages of factors involved in food"
        },
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: chartData
        }]
    }

    useEffect(() => {
        getLocalCFP()
    }, [])


    return (
        <div className="reduce-food-cfp-container reduce-food-cfp-container-eat-local">
            <h2>Eat Locally Produced Food</h2>
            <CanvasJSChart options={options} />
            <p className="chart-version">Chart 3.0</p>
            <p className="food-graph-explain graph-explain">
                <i>
                    Graph shows the share of process involved in food supply chain.
                </i>
            </p>
            <div className="explanation-container">
                <p>
                    You can easily reduce the carbon footprint of your food by up to 7% by eating locally. Food miles are only a small part of our food’s carbon emissions, so to devise the best strategy to cut its carbon footprint.

                    In fact, up to 83% of CO2 emissions come from only production, in which mainly comes from Meat Lovers (especially beef, pork, lamb) Production. You may go vegetarian or vegan to reduce carbon emissions drastically.
                </p>
            </div>

        </div>
    );
}

export default ReduceFoodCfpEatLocal;
