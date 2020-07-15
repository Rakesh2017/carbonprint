import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import baseUrl from '../database-secrets/secrets.js';
import FoodCarbonPrint from '../components/food/show-food-carbon-result.js'
import foodFrequencyOption from '../global-variables/food-frequency-option.js'
import FoodBarChart1 from '../components/food/food-bar-chart-1.js'
import { Container, Button } from '@material-ui/core';
import FoodUserBarChart from '../components/food/food-user-bar-chart.js'
import FoodCarbonPrintUnited from '../components/food/show-food-carbon-result-united.js'
import ReduceFoodCfpEatVeg from '../components/food/reduce-food-cfp-eat-veg.js'
import ReduceFoodCfpEatLocal from '../components/food/reduce-food-cfp-eat-local.js'
// import FoodSupplyChainChart from '../components/food/food-supply-chain-graph.js'
import DietDisplay from '../components/food/diet-display.js'



const Food = ({ parentCallback }) => {

    /* variables and hooks declarations */
    const foodUrl1 = baseUrl + "/food/1"
    const foodSupplyUrl = baseUrl + "/food-supply"
    // contains list of all foods
    const [foodProductOption, setFoodProductOption] = useState()
    let tempFoodProductOption = [], temp
    // contains current food frequency in select options
    const [foodFrequency, setFoodFrequency] = useState()
    // contains current food product in select options
    const [foodProduct, setFoodProduct] = useState()
    // contains current food and frequency in select option
    const [currentFoodProduct, setCurrentFoodProduct] = useState("")
    const [currentFoodFrequency, setCurrentFoodFrequency] = useState("")
    const [currentFoodType, setCurrentFoodType] = useState("")
    // contains list which in actual contains items to preview carbon footprint
    const [selectedFoodProducts, setSelectedFoodProducts] = useState([])
    // to check if both select options are selected
    const [checkPF, setCheckPF] = useState(false)
    // to check in other components that add item button is clicked
    const [checkAddBtn, setCheckAddBtn] = useState(false)
    // setting carbon footprint reduce message, derived from diet input of user
    let meatPercentage, vegPercentage, fruitPercentage, liquidPercentage

    let message = ''

    /* Food supply chain variables */
    let land_use = [], temp_land_use = []
    let animal_feed = [], temp_animal_feed = []
    let farm = [], temp_farm = []
    let processing = [], temp_processing = []
    let transport = [], temp_transport = []
    let packaging = [], temp_packaging = []
    let retail = [], temp_retail = []

    // notations for food frequency intake
    let once_a_day = "Once a day"
    let twice_a_day = "Twice a day or more"
    let one_to_two_week = "1-2 times a week"
    let three_to_five_week = "3-5 times a week"

    /* Fetch Carbon footprints to be used for input manipulations */
    function getFood_1() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(foodUrl1, { headers })
            .then(response => response.json())
            .then(data => {
                let result
                data.forEach(element => {
                    result = element.result
                })
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
                        people_avg_carbon: element.people_avg_carbon,
                        food_type: element.food_type
                    })
                    tempFoodProductOption.push(temp)
                });
            })
        setFoodProductOption(tempFoodProductOption)
    }

    /* Fetch food supply chain carbon footprints */
    function getFood_supply() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(foodSupplyUrl, { headers })
            .then(response => response.json())
            .then(data => {
                let result
                data.forEach(element => {
                    result = element.result
                });
                result.forEach(element => {
                    /* Here value/id is food product cuz food product is unique here */
                    /* land use */
                    if (element.land_use > 0) {
                        temp_land_use = ({
                            label: element.food_product,
                            y: element.land_use
                        })
                        land_use.push(temp_land_use)
                    }
                    if (element.animal_feed > 0) {
                        /* animal feed */
                        temp_animal_feed = ({
                            label: element.food_product,
                            y: element.animal_feed
                        })
                        animal_feed.push(temp_animal_feed)
                    }
                    if (element.farm > 0) {
                        /* farm */
                        temp_farm = ({
                            label: element.food_product,
                            y: element.farm
                        })
                        farm.push(temp_farm)
                    }
                    if (element.transport > 0) {
                        /* transport */
                        temp_transport = ({
                            label: element.food_product,
                            y: element.transport
                        })
                        transport.push(temp_transport)
                    }
                    if (element.processing > 0) {

                        /* processing */
                        temp_processing = ({
                            label: element.food_product,
                            y: element.processing
                        })
                        processing.push(temp_processing)
                    }
                    if (element.packaging > 0) {
                        /* packaging */
                        temp_packaging = ({
                            label: element.food_product,
                            y: element.packaging
                        })
                        packaging.push(temp_packaging)
                    }
                    if (element.retail > 0) {
                        /* retail */
                        temp_retail = ({
                            label: element.food_product,
                            y: element.retail
                        })
                        retail.push(temp_retail)
                    }
                })

            })
        const tempArr = {
            land_use: land_use,
            animal_feed: animal_feed,
            processing: processing,
            packaging: packaging,
            transport: transport,
            farm: farm,
            retail: retail
        }
        // setFoodSupplyChainData(tempArr)
    }

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        try {
            getFood_1();
        } catch (error) {
            console.log(error)
        }
        // getFood_supply();
        return () => {
            // clean up
        }
    }, [])

    useEffect(() => {
        parentCallback(selectedFoodProducts)
        return () => {
            //cleanup
        };
    }, [selectedFoodProducts]);

    // setting the food frequency on select options (selection from options)
    function playFoodFrequency(event) {
        setCurrentFoodFrequency(event[0].label)
        setFoodFrequency(event)
        setCheckPF(true)
        if (!checkPF) setCheckPF(true) // don't want to render this state again and again
        if (checkPF) {
            document.getElementById("add-food-item").style.display = "block"
        }
    }

    // setting the food product on select options (selection from options)
    function playFoodProduct(event) {
        setCurrentFoodProduct(event[0].label)
        setCurrentFoodType(event[0].food_type)
        setFoodProduct(event)
        if (!checkPF) setCheckPF(true) // don't want to render this state again and again
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

        // delete entry from screen
        let allButtonElements = document.getElementById("food-dynamic-entries").querySelectorAll(".item-remove-button");

        for (var i = 0; i < allButtonElements.length; i++) {
            allButtonElements[i].onclick = function () {

                var element = document.getElementById(this.id + "-container");
                element.parentNode.removeChild(element);
                removeFromList(this.id)
            }
        }

        // delete product from list and update graph
        function removeFromList(id) {
            let tempArr = selectedFoodProducts
            tempArr.forEach((element, index) => {
                if (element.product === id) {

                    tempArr.splice(index, 1);

                    setSelectedFoodProducts([])
                    setSelectedFoodProducts(tempArr)
                    tempArr = []

                }
            });
        }

    }

    /* calculate percentage of diet type */
    const calculateDietPercentage = (total, part) => {
        return ((part / total) * 100).toFixed(2)
    }



    /* count food type to display the contingency results */
    function countFoodTypes() {
        let meatCount = 0, vegCount = 0, fruitCount = 0, totalCount = 0, liquidCount = 0
        // counting food types
        selectedFoodProducts.forEach(element => {
            if (element.food_type === "meat") {
                meatCount += 1
            } else if (element.food_type === "vegetable") {
                vegCount += 1
            } else if (element.food_type === "fruit") {
                fruitCount += 1
            } else if (element.food_type === "drink") {
                liquidCount += 1
            }
        });

        totalCount = meatCount + vegCount + fruitCount + liquidCount

        // derive message
        meatPercentage = vegPercentage = fruitPercentage = liquidPercentage = 0.0
        meatPercentage = calculateDietPercentage(totalCount, meatCount)
        vegPercentage = calculateDietPercentage(totalCount, vegCount)
        fruitPercentage = calculateDietPercentage(totalCount, fruitCount)
        liquidPercentage = calculateDietPercentage(totalCount, liquidCount)

        if (meatPercentage => 50) {
            message = `Your diet consist of ${meatPercentage}% of meat. You may have balanced diet of both veg and non-veg to reduce your carbon footprint. Or, You can go for vegetarian to substantially decrease your carbon footprint.`
        } else {
            message = `Your diet consist of ${meatPercentage}% of meat ${vegPercentage}% vegetables, ${fruitPercentage}% fruits and ${liquidPercentage}% of drink products. This diet seems ideal for low carbon footprint. Additionally you may practice below measure to reduce your food carbon footprint further`
        }

    }


    // Add foot item as selection for calculating carbon footprint
    function addItem() {
        // declaring element to be inserted dynamically

        if (!checkDuplicate()) {
            if (!checkAddBtn) {
                setCheckAddBtn(true)
            }
            let temp = []
            let userCarbonPrint, avgCarbonPrint
            foodProductOption.forEach(element => {
                if (currentFoodProduct === element.label) {
                    avgCarbonPrint = element.people_avg_carbon
                    if (currentFoodFrequency === once_a_day) {
                        userCarbonPrint = element.once_a_day
                    } else if (currentFoodFrequency === twice_a_day) {
                        userCarbonPrint = element.twice_a_day
                    } else if (currentFoodFrequency === one_to_two_week) {
                        userCarbonPrint = element.one_to_two_week
                    } else if (currentFoodFrequency === three_to_five_week) {
                        userCarbonPrint = element.three_to_five_week
                    }
                }
            });
            temp = {
                product: currentFoodProduct,
                frequency: currentFoodFrequency,
                userCarbonPrint: userCarbonPrint,
                avgCarbonPrint: avgCarbonPrint,
                food_type: currentFoodType
            }
            setSelectedFoodProducts(selectedFoodProducts.concat(temp))

            temp = []
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
        <Container className="food-main-container">

            <div id="section-heading">
                {/* heading */}
                <h2>How do your food choices impact the Environment?</h2>
            </div>

            {/* logo+input container  */}
            <div className="logo+input-container">
                {/* Logo Container */}
                <div className="logo-container">
                    {/* food logo */}
                    {/* <img /> logo */}
                    {/* <h3>Food</h3> */}
                </div>

                {/* input container */}
                <div className="input-container">
                    {/* input 1 */}
                    <label>Which food would you like?</label>
                    <Select
                        placeholder="Select Food"
                        className="select-food"
                        options={foodProductOption}
                        onChange={playFoodProduct}
                    />
                    {/* input 2 */}
                    <label>How often do you have it?</label>
                    <Select
                        placeholder="Select how often?"
                        className="select-food"
                        options={foodFrequencyOption}
                        onChange={playFoodFrequency}
                    />
                </div>

                {/* Add more */}
                <Button style={{ display: "none" }} id="add-food-item" variant="contained" onClick={addItem}>
                    Add Item
                </Button>


                <div id="food-dynamic-entries" onClick={loopClicks}></div>


                {/* Displays the result of calculated carbon footprint */}
                <FoodCarbonPrint foodFrequency={foodFrequency} foodProduct={foodProduct} foodList={selectedFoodProducts} parentCallback={()=> console.log("done")} />

            </div>


            {/* displays user carbon foot print chart of selected foods  */}
            <FoodUserBarChart checkAddBtn={checkAddBtn} foodList={selectedFoodProducts} />


            {/* Displays the result of Accumulated calculated carbon footprint */}
            <FoodCarbonPrintUnited checkAddBtn={checkAddBtn} foodList={selectedFoodProducts} />

            {/* displays the average cfp chart */}
            <FoodBarChart1 checkAddBtn={checkAddBtn} foodProduct={foodProduct} foodFrequency={foodFrequency} foodList={foodProductOption} />

            {/* it shows the bundling of carbon footprint along the supply chain of food */}
            {/* <FoodSupplyChainChart foodSupplyChainData={foodSupplyChainData} /> */}

            {/* showing result how to reduce food carbon footprint */}
            {countFoodTypes()}

            {checkAddBtn && selectedFoodProducts.length >= 1 ?
                <div className="how-to-reduce">
                    <h2>How to reduce food carbon footprint?</h2>
                    <DietDisplay reduceMessage={message} meatPercentage={meatPercentage} fruitPercentage={fruitPercentage} vegPercentage={vegPercentage} liquidPercentage={liquidPercentage} />
                </div> : null
            }
            {/* show reduce methods for food */}
            {checkAddBtn && selectedFoodProducts.length >= 1 ? <ReduceFoodCfpEatVeg /> : null}

            {/* show reduce methods for food */}
            {checkAddBtn && selectedFoodProducts.length >= 1 ? <ReduceFoodCfpEatLocal /> : null}

        </Container>
    )
}

export default (Food)