import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({chartNumber, chartInfo, axisX, axisY, axisY2 }) => {
    return (
        <div className="chart-container">
            {/* <p class="axis-titles axis">X-Axis: {axisX} </p> */}
            {/* <p class="axis-titles axis">Y-Axis: {axisY} </p> */}
            {/* <p class="axis-titles axis y2-axis">Y2-Axis: {axisY2} </p> */}
            <p class="axis-titles chart-version">Chart Version: {chartNumber}</p>
            <p class= "chart-info">
                <i>
                    {chartInfo}
                </i>
            </p>
        </div>
    );
}


export default ChartDescription;
