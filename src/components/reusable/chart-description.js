import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({chartNumber, chartInfo }) => {
    return (
        <div className="chart-container">
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
