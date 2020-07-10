import React from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
import ChartDescription from '../../reusable/chart-description.js';
import Fact from '../../reusable/facts.js'

const EconomyClassFlight = () => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartVersion = "Chart 4.0"
    const chartInfo = "This Chart illustrates the carbon footprint released by One-Way Various Flight Classes Class Air Flight from Madrid, Spain to Vancouver, Canada (Connecting Flight (Susceptible to increased distance) VS Direct Flight (8427 Kms))."

    const connectingOptions = {
        title: {
            // text: ""
        },
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                toolTipContent: "<strong>{indexLabel} = {y} Kgs for 8427Kms</strong>",
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
            <h2>Fly in Economy Class.</h2>
            <p>
                According to a study from the World Bank, the emissions associated with flying in business class are about <strong>three times</strong> as great as flying in coach.
                In business class and first class, seats are bigger, so fewer people are being moved by the same amount of fuel. The study estimates that a first-class seat could have a carbon footprint as much as nine times as big as an economy one.
                At last, coach passengers have something to be happy about: smaller carbon footprints.
            </p>
            {/* Fact container */}
            <Fact message="Airline emissions make up a little more than three per cent of total emissions in Canada. The total carbon impact of a single flight is so high that avoiding just one trip can be equivalent to going (gasoline) car-free for a year." />

            <div>
                <CanvasJSChart options={connectingOptions} />
                <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
            </div>
        </div>
    );
}

export default EconomyClassFlight
