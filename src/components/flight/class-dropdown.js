import Select from 'react-dropdown-select';
import React, { useState, useEffect } from 'react';
import baseUrl from '../../database-secrets/secrets.js';

const ClassDropDown = ({ parentCallback }) => {

    const foodUrl = baseUrl + "/flights-carbon-footprint"
    const [options, setOptions] = useState([])
    let temp = []
    const controller = new AbortController();
    const signal = controller.signal;

    const sendData = (e, opt) => {
        parentCallback(e, opt)
    }

    /* fetching data */
    function getData() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(foodUrl, { headers }, { signal })
            .then(response =>
                response.json())
            .then(data => {

                for (let x in data[1].result[0]) {
                    if (x !== "flight_carbon_footprint_id" && x !== "divisor") {
                        temp.push({ label: x.replace("_", " "), value: data[1].result[0][x] })
                    }
                }
                setOptions(temp)
            })
    }

    // setting the food product on select options (selection from options)
    function playFoodProduct(event) {
        sendData(event, options)
    }

    useEffect(() => {
        getData()
        return (() => {
            controller.abort();
        })
    }, [])

    return (
        <div className="class-flight-drop-down-container">
            <label>What type of Flight Class Type it is?</label>
            <Select
                placeholder="Select Flight Class Type"
                className="select-flight"
                options={options}
                onChange={playFoodProduct}
            />

        </div>
    );
}

export default ClassDropDown;
