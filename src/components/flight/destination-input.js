import React, { useState, useEffect } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const DestinationInput = ({ parentCallback }) => {

    const sendData = (c, address) => {
        parentCallback(c, address)
    }

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                const temp = [{ lat: lat }, { lng: lng }]
                let address = document.getElementById("flight-destination").value
                sendData(temp, address)
            })
            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    const renderSuggestions = () => data.map((suggestion) => {
        const {
            id,
            structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
            <li key={id} onClick={handleSelect(suggestion)}>
                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
        );
    });


    return (
        <div ref={ref} className="destination-container">

            <label>Enter Destination Airport or City Name?</label>
            <input
                id="flight-destination"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="City/Airport"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul> {renderSuggestions()} </ul>}

        </div>
    );
}

export default DestinationInput;
