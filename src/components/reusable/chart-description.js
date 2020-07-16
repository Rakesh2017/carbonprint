import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({chartNumber, axisX, axisY, axisY2 }) => {
    return (
        <div className="chart-container">

            <div class="axis">
                <p className="">X-Axis: {axisX} </p>
                <p className="">Y-Axis: {axisY} </p>
                <p className=" y2-axis">Y2-Axis: {axisY2} </p>
            </div>
            <p className="chart-version">Chart Version: {chartNumber}</p>
            </div>
    );
}


export default ChartDescription;
