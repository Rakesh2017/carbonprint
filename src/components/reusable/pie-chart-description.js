import React from 'react';

/* Contains the description of a chart */

const PieChartDescription = ({ chartNumber, chartInfo }) => {
    return (
        <div className="chart-container">
            <p className="chart-version">Chart Version: {chartNumber}</p>
            <p className="chart-info">
                <i>
                    {chartInfo}
                </i>
            </p>
        </div>
    );
}


export default PieChartDescription;
