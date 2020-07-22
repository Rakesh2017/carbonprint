import React from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
import ChartDescription from '../../reusable/chart-description.js';
import Fact from '../../reusable/facts.js'

const EconomyClassFlight = () => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartVersion = "Chart 4.0"
    const chartInfo = "This Chart illustrates the carbon footprint released by One-Way Various Flight Classes Class Air Flight from Madrid, Spain to Vancouver, Canada (Connecting Flight (Susceptible to increased distance) VS Direct Flight (8427 Kms))."

    const connectingOptions = {
        animationEnabled: true,
        backgroundColor:"transparent",
        legend: {
            fontWeight: "normal"
        },
        data: [
            {
                type: "doughnut",
                showInLegend: true,
                toolTipContent: "<b><i>{indexLabel}</i></b> = <b>{y}</b> Kgs for 8427Kms",
                legendText: "{indexLabel}",
                dataPoints: [
                    { y: "630", indexLabel: "Economy (Most Carbon Saving)" },
                    { y: "990", indexLabel: "Premium (~0.5X more than economy)" },
                    { y: "1790", indexLabel: "Business (~2X more than economy)" },
                    { y: "2470", indexLabel: "First Class (~3X more than economy)" }
                ]
            }
        ]
    }


    return (
        <div className="reduce-carbon-foot-print economy-class-flight-container">
            <h3>Fly in Economy Class.</h3>
            <p>
                According to a study from the World Bank, the emissions associated with flying in business class are about <strong>three times</strong> as great as flying in coach.
            </p>
           
            <div class="chart">
                <p><strong>Carbon Emission due to different class of Flights</strong></p>
                <CanvasJSChart options={connectingOptions} />
                <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
            </div>
            
             
            {/* Fact container */}
            <Fact message="Airline emissions make up a little more than three per cent of total emissions in Canada. The total carbon impact of a single flight is so high that avoiding just one trip can be equivalent to going (gasoline) car-free for a year." />

        </div>
    );
}

export default EconomyClassFlight
