import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';


const RadioConnectingFlight = ({parentCallback}) => {

    const sendData = (e) => {
        parentCallback(e)
    }

    return (
        <div className="connecting-flight-container">
            <label>Is it Connecting Flight?</label>

            <RadioGroup className="connecting-flight-radio-group" onChange={sendData} horizontal>
                <RadioButton value="0" style={{padding:"4px"}}>
                    Yes
                </RadioButton>
                <RadioButton value="1">
                    No
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default RadioConnectingFlight
