import React from 'react'
import Fact from '../../../reusable/facts.js'
import CanvasJSReact from '../../../../assets/canvasjs.react';
import ChartDescription from '../../../reusable/chart-description.js';


const GreenVehicle = () => {

    const chartVersion = "Chart 2.0"
    const chartInfo = "Graph illustrates how a widely used petroleum run car emits far more carbon than electric cars."
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        legend: 
		{
			verticalAlign: "top",
            horizontalAlign: "left",
            fontWeight: "normal",
            markerMargin: 5               
		},
        axisY: {
            titleWrap: true,
            margin: 15,
            interlacedColor: "#F8F1E4",
            gridColor: "lightgrey",
            suffix: " kg",
        },
        axisX: {
            titleWrap: true,
            labelAngle: 0,
            interval: 1,
        },
        data: [
            {
                type: "bar",
                toolTipContent: "<b><i>{label}</i></b> = <b>{y}</b>Kg CO<sup>2</sup>",
                dataPoints: [
                    { y: 11, label: "Car Electric", indexLabel: "~7 times less" },
                    { y: 80.7, label: "Car Petroleum" },
                ]
            }
        ]
    }

    return (
        <div className="reduce-carbon-foot-print green-vehicle-container">
            <h2>Invest in a greener vehicle</h2>
            <p>
                Hybrid and electric cars use electricity as fuel, generating fewer emissions than their gas-guzzling counterparts. Plus, if charged with clean electricity from renewable sources, electric cars produce zero CO2. Using cleaner fuels and a fuel-efficient car helps too. Some fuels can reduce emissions by up to 80% compared to gasoline! Go ahead and check out the EPA’s Green Vehicle Guide. Depending on where you live, after incentives and gas savings, it can cost next to nothing to swap your car for an electric one.
            </p>
            {/* Fact container */}
            <Fact message="Driving accounts for 47% of the carbon footprint of a typical American family with two cars." />

            <div class="chart"> 
                <h2>Electric Vs Petroleum Car Carbon footprint</h2>
                <CanvasJSChart options={options} />
                <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
            </div>
        </div>
    );
}

export default GreenVehicle
