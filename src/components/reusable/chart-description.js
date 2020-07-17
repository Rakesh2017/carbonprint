import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({ chartNumber, axisX, axisY, chartInfo }) => {
    return (
        <div className="chart-container">

            <div className="axis">
                <p className="">X-Axis: {axisX} </p>
                <p className="">Y-Axis: {axisY} </p>
            </div>
            <p className="chart-version">Chart Version: {chartNumber}</p>

            <div className="chart-info">
               <i> {chartInfo} </i>
            </div>

        </div>

    );
}


export default ChartDescription;
