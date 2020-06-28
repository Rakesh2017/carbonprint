import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

export default function FoodSupplyChainChart({ foodSupplyChainData }) {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const land_use = foodSupplyChainData.land_use
    const animal_feed = foodSupplyChainData.animal_feed
    const farm = foodSupplyChainData.farm
    const processing = foodSupplyChainData.processing
    const transport = foodSupplyChainData.transport
    const packaging = foodSupplyChainData.packaging
    const retail = foodSupplyChainData.retail

    const options = {
        title: {
            text: "Division of products Sold in Quarter."
        },
        toolTip: {
            shared: false
        },
        axisY: {
            title: "percent"
        },
        axisX: {
            interval: 1
        },
        data: [
            {
                type: "stackedBar100",
                showInLegend: true,
                name: "Animal Feed",
                dataPoints: animal_feed
            },
            {
                type: "stackedBar100",
                showInLegend: true,
                name: "Land Use",
                dataPoints: land_use
            },
            {
                type: "stackedBar100",
                showInLegend: true,
                name: "Farm",
                dataPoints: farm
            }
        ]
    }


    return (
        <div id="food-supply-chain-graph" style={{ display: "block" }}>
            <CanvasJSChart options={options} />
        </div>
    )
}
