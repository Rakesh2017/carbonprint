import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import ChartDescription from '../reusable/chart-description.js';

const DietDisplay = ({ reduceMessage, meatPercentage, fruitPercentage, vegPercentage, liquidPercentage }) => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const chartVersion = "Chart 3.0"
    const chartInfo = "Graph illustrates the distribution of food types of your food diet"


    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Your Food Diet"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: meatPercentage, label: "Meat Products" },
                { y: vegPercentage, label: "Vegetables" },
                { y: fruitPercentage, label: "Fruits" },
                { y: liquidPercentage, label: "Dairy Drinks/ Juices" }
            ]
        }]
    }

    return (
        <div className="diet-display-container">
            <p>
                {reduceMessage}
            </p>
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber ={chartVersion} chartInfo = {chartInfo} />
        </div>
    );
}

export default DietDisplay;
