import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioTripChoice = ({parentCallback}) => {

    const sendData = (e) => {
        parentCallback(e)
    }

    return (
        <div>
            <RadioGroup className="flight-radio-group" onChange={sendData} horizontal>
                <RadioButton value="0">
                    One Way Trip
                </RadioButton>
                <RadioButton value="1">
                    Return Trip
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default RadioTripChoice;
