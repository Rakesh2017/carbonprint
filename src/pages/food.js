import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import Button from '@material-ui/core/Button';
import baseUrl from '../database-secrets/secrets.js';

const Food = () => {

    /* variables and hooks declarations */
    const teamUrl = baseUrl + "/food/1"
    let [foodProductOption, setFoodProductOption] = useState()
    let tempFoodProductOption = [], temp
    let [foodFrequency, setFoodFrequency] = useState()
    let [foodProduct, setFoodProduct] = useState()

    /* Fetch Carbon footprints to br used for input manipulations */
    function getFood1() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(teamUrl, { headers })
            .then(response => response.json())
            .then(data => {
                let result
                data.forEach(element => {
                    result = element.result
                });
                result.forEach(element => {
                    /* Here value/id is food product cuz food product is unique here */
                    temp = ({
                        label: element.food_product,
                        value: element.food_product,
                        once_a_day: element.once_day,
                        twice_a_day: element.twice_day,
                        one_to_two_week: element.one_two_week,
                        three_to_five_week: element.three_five_week,
                        avg_week_person: element.avg_week_person,
                        people_avg_carbon: element.people_avg_carbon
                    })
                    tempFoodProductOption.push(temp)
                });
            })
        setFoodProductOption(tempFoodProductOption)
    }

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        getFood1();
    }, [])

    // setting the food frequency on user input (selection from options)
    function playFoodFrequency(event) {
        setFoodFrequency(foodFrequency = event)
        showCarbonFootprint()
    }

    // setting the food product on user input (selection from options)
    function playFoodProduct(event) {
        setFoodProduct(foodProduct = event)
        showCarbonFootprint()
    }

    // show the carbon footprint
    function showCarbonFootprint() {
        if (foodFrequency !== undefined && foodProduct !== undefined) {
            if (foodFrequency[0].value === 1) {
                setCarbonEmissionUnits(foodProduct[0].once_a_day)
            } else if (foodFrequency[0].value === 2) {
                setCarbonEmissionUnits(foodProduct[0].one_to_two_week)
            } else if (foodFrequency[0].value === 3) {
                setCarbonEmissionUnits(foodProduct[0].three_to_five_week)
            } else if (foodFrequency[0].value === 4) {
                setCarbonEmissionUnits(foodProduct[0].twice_a_day)
            } else if (foodFrequency[0].value === 5) {
                document.getElementById("food-carbon-print-kgs-id").innerHTML = `You don't have ${foodProduct[0].label}, but the average consumption ${foodProduct[0].label} in world is ${foodProduct[0].avg_week_person} servings per week. Over an entire year that equals ${foodProduct[0].people_avg_carbon} Kilograms of greenhouse gas emissions.`
                
                document.getElementById("food-equivalent-car-id").innerHTML = `That's the equivalent of driving a regular petrol car for ${numberWithCommas((foodProduct[0].people_avg_carbon * 4.33).toFixed(0))} Kilometers.`
            }
        }

    }

    /* Set carbon emission in kilograms */
    function setCarbonEmissionUnits(carbonPrint) {
        document.getElementById("food-carbon-print-kgs-id").innerHTML = `Over an entire year your consumption of ${foodProduct[0].label} is contributing ${numberWithCommas(carbonPrint)} kilograms to your annual greenhouse gas emissions.`

        document.getElementById("food-equivalent-car-id").innerHTML = `That's the equivalent of driving a regular petrol car for ${numberWithCommas((carbonPrint * 4.33).toFixed(0))} Kilometers.`

    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const foodFrequencyOption = [
        { label: "Once a day", value: 1 },
        { label: "1-2 times a week", value: 2 },
        { label: "3-5 times a week", value: 3 },
        { label: "Twice a day or more", value: 4 },
        { label: "Never", value: 5 }
    ];

    return (
        <div className="food-main-container">
            {/* heading */}
            <h1>How do your food choices impact the Environment?</h1>

            {/* logo+input container  */}
            <div className="logo+input-container">
                {/* Logo Container */}
                <div className="logo-container">
                    {/* food logo */}
                    {/* <img /> logo */}
                    <h3>Food</h3>
                </div>
                {/* input container */}
                <div className="input-container">
                    {/* input 1 */}
                    <label>Which food would you like?</label><br />
                    <Select
                        placeholder="Select Food"
                        className="select-food"
                        options={foodProductOption}
                        onChange={playFoodProduct}
                    />
                    {/* input 2 */}
                    <label>How often do you have it?</label><br />
                    <Select
                        placeholder="Select how often?"
                        className="select-food"
                        options={foodFrequencyOption}
                        onChange={playFoodFrequency}
                    />
                </div>
            </div>

            {/* carbon print stats container */}
            <div className="carbon-print-revealed-container carbon-print-food-revealed-container">
                {/* carbon print in kgs */}
                <p className="food-carbon-print-kgs" id="food-carbon-print-kgs-id">

                </p>
                {/* equivalent to car kilometers */}
                <p className="food-equivalent-car" id="food-equivalent-car-id">

                </p>

            </div>

        </div>
    )
}

export default (Food)