import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import baseUrl from '../database-secrets/secrets.js';
import FoodCarbonPrint from '../components/show-food-carbon-result.js'
import foodFrequencyOption from '../global-variables/global-variables.js'
import FoodBarChart1 from '../components/food-bar-chart-1.js'
import { Button } from '@material-ui/core';

const Food = () => {

    /* variables and hooks declarations */
    const teamUrl = baseUrl + "/food/1"
    // contains list of all foods
    let [foodProductOption, setFoodProductOption] = useState()
    let tempFoodProductOption = [], temp
    // contains current food frequency in select options
    let [foodFrequency, setFoodFrequency] = useState()
    // contains current food product in select options
    let [foodProduct, setFoodProduct] = useState()
    // contains current food and frequency in select option
    let [currentFoodProduct, setCurrentFoodProduct] = useState("")
    let [currentFoodFrequency, setCurrentFoodFrequency] = useState("")
    // contains list which in actual contains items to preview carbon footprint
    let [selectedFoodProducts, setSelectedFoodProducts] = useState([])
    // to check if both select options are selected
    let [checkPF, setCheckPF] = useState(false)

    /* Fetch Carbon footprints to br used for input manipulations */
    function getFood_1() {
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
        getFood_1();
    }, [])

    // setting the food frequency on user input (selection from options)
    function playFoodFrequency(event) {
        setCurrentFoodFrequency(event[0].label)
        setFoodFrequency(foodFrequency = event)
        setCheckPF(true)
        if (checkPF) {
            document.getElementById("add-food-item").style.display = "block"
        }
    }

    // setting the food product on user input (selection from options)
    function playFoodProduct(event) {
        setCurrentFoodProduct(event[0].label)
        setFoodProduct(foodProduct = event)
        setCheckPF(true)
        if (checkPF) {
            document.getElementById("add-food-item").style.display = "block"
        }
    }

    /* Check if its not a duplicate entry */
    function checkDuplicate() {
        let count = 0
        selectedFoodProducts.forEach(element => {
            if (element.product === currentFoodProduct) {
                count = 1
            }
        });

        if (currentFoodFrequency === "Never") {
            count = 1
        }

        if (count === 1) {
            return true
        } else return false
    }

    /* Loop Clicks on dynamic delete entries */
    function loopClicks() {

        function removeFromList(id) { 
            
            selectedFoodProducts.forEach((element, index) => {
                if (element.product === id) {
                    console.log("name of fruit is :"+id + index)
                    selectedFoodProducts.splice(index, 1);
                    setSelectedFoodProducts(selectedFoodProducts)
                    // break
                }
            });
         }

        let allButtonElements = document.getElementById("food-dynamic-entries").querySelectorAll(".item-remove-button");

        console.log("this happened")
        for (var i = 0; i < allButtonElements.length; i++) {
            allButtonElements[i].onclick = function () {
                console.log("and this")
                var element = document.getElementById(this.id+"-container");
                element.parentNode.removeChild(element);
                removeFromList(this.id)
            }
        }
    }


    // Add foot item as selection for calculating carbon footprint
    function addItem() {
        // declaring element to be inserted dynamically

        if (!checkDuplicate()) {

            let temp = []
            temp = {
                product: currentFoodProduct,
                frequency: currentFoodFrequency
            }
            selectedFoodProducts.push(temp)
            setSelectedFoodProducts(selectedFoodProducts)
            console.log(selectedFoodProducts)

            let parent_container = document.getElementById("food-dynamic-entries")
            let child_container = document.createElement("dIV")
            let paragraph = document.createElement("P")
            let delete_button = document.createElement("BUTTON")

            delete_button.id = currentFoodProduct
            child_container.id = currentFoodProduct + "-container"
            delete_button.className = "item-remove-button"
            delete_button.textContent = "Remove"
            paragraph.textContent = currentFoodProduct + ", " + currentFoodFrequency

            child_container.appendChild(paragraph)
            child_container.appendChild(delete_button)
            parent_container.appendChild(child_container)
        }

    }

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

                {/* Add more */}
                <Button style={{ display: "none" }} id="add-food-item" variant="contained" color="primary" onClick={addItem}>
                    Add Item
                </Button>

                <div id="food-dynamic-entries" onClick={loopClicks}>
                </div>

            </div>

            {/* Displays the result of calculated carbon footprint */}
            <FoodCarbonPrint foodFrequency={foodFrequency} foodProduct={foodProduct} />

            {/* displays the chart */}
            <FoodBarChart1 foodProduct={foodProduct} foodFrequency={foodFrequency} foodList={foodProductOption} />

        </div>
    )
}

export default (Food)