import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import PieChartDescription from '../reusable/pie-chart-description.js';

const DietDisplay = ({ reduceMessage, meatPercentage, fruitPercentage, vegPercentage, liquidPercentage }) => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const chartVersion = "Chart 3.0"
    const chartInfo = "Graph illustrates the percentage distribution of food types derived from your food input"


    const options = {
        exportEnabled: true,
        animationEnabled: true,
        backgroundColor:"transparent",
        legend: {
            fontWeight: "normal"
        },
        data: [{
            type: "doughnut",
            startAngle: 75,
            toolTipContent: "<b><i>{label}</i></b>: <b>{y}</b>%",
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
        <div className="diet-display-container section-column-2">
            <div className="chart-info-section">
                <h3>Your Food Diet</h3>
                <p>
                    {reduceMessage}
                </p>
            </div>
            <CanvasJSChart options={options} />
            {/* chart container */}
            <CanvasJSChart options={options} />
            <PieChartDescription chartNumber ={chartVersion} chartInfo = {chartInfo} />
        </div>
    );
}

export default DietDisplay;
