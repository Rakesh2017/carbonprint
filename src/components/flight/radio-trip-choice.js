import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioTripChoice = ({parentCallback}) => {

    const sendData = (e) => {
        parentCallback(e)
    }

    return (
        <div className="trip-choice-container">
            <p>Is it One-Way or Round Trip?</p>
            <RadioGroup className="flight-radio-group" onChange={sendData} horizontal>
                <RadioButton value="0">
                    One Way Trip
                </RadioButton>
                <RadioButton value="1">
                    Round Trip
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default RadioTripChoice;
