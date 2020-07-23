import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import CarTypeOptions from '../../../global-variables/car-type-option.js'
import { Button } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Toaster from '../../toast/toaster.js'

const Input = ({ parentCallback }) => {

    const [type, setType] = useState()
    const [average, setAverage] = useState()
    const [distance, setDistance] = useState()

    function playButton() {
        if (type === undefined) {
            Toaster("Define Car Type", true)
        } else if (average === undefined) {
            Toaster("Define Car Average", true)
        } else if (distance === undefined) {
            Toaster("Define Average Distance Travel in month", true)
        } else {
            parentCallback(type, average, distance)
        }
    }


    /* select option */
    function playOptions(event) {
        setType(event)
    }

    return (
        <div class="container-input fieldset-travel">
            {/* input 1 */}
            <div>
                <label>What type of car you have?</label>
                <Select
                    placeholder="Select Type"
                    className="select-car-type"
                    options={CarTypeOptions}
                    onChange={playOptions}
                    searchable = {false}
                    separator = {true}
                />            
            </div>
            
            {/* input 2 */}
            <div>
                <label>How much litres of gas your car burn per 100 kms?</label>
                <input id='average-per-100-km' type="number" step="0.1" min='0' max='100' maxLength='2' onBlur={(event) => setAverage(event.target.value)} /> Litres/100kms
            </div>                
            {/* input 3 */}
            <div>
                <label>Average distance (in Kilometers) travelled in car in month?</label>
                <input id='month-kilometer' type="number" step="1" min='0' onBlur={(event) => setDistance(event.target.value)} /> Kilometers
            </div>
            
            {/* get */}
            <div className="button-submit">
               <Button id="btn-car-carbon" variant="contained"
               color="inherit" 
               onClick={playButton}>
                Get Carbon footprint
                </Button>
            </div>
            

            <ToastContainer />
        </div>
    );
}

export default Input
