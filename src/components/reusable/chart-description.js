import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({chartNumber, chartInfo, axisX, axisY, axisY2 }) => {
    return (
        <div className="chart-container">
            <p>{axisX} </p>
            <p>{axisY} </p>

            <p>{chartNumber}</p>
            <p>
                <i>
                    {chartInfo}
                </i>
            </p>
        </div>
    );
}

export default ChartDescription
