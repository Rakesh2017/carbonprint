import React from 'react';
import Select from 'react-dropdown-select';

const Input = ({ parentCallback }) => {

    const options = [
        { label: "Petroleum", value: "1", carbon_per_litre: 2392 },
        { label: "Diesel", value: "2", carbon_per_litre: 2640 },
        { label: "LPG", value: "3", carbon_per_litre: 83 },
    ]

    const sendData = (c, address) => {
        parentCallback(c, address)
    }

    return (
        <div>
            {/* input 1 */}
            <label>What type of car you have?</label>
            <Select
                placeholder="Select Type"
                className="select-car-type"
                options={options}
            // onChange={playOptions}
            />
            {/* input 2 */}
            <label>How much litres of gas you car burn per 100 kms?</label>
            <input id='average-per-100-km' type="number" step="0.1" min='0' max='30' /> Litres/100kms
            {/* input 3 */}
            <label>Average distance (in Kilometers) travelled in car in month?</label>
            <input id='month-kilometer' type="number" step="1" min='0' /> Kilometers
        </div>
    );
}

export default Input
