import React from 'react';
import numberWithCommas from '../global-functions/number-comma.js'

function FoodCarbonPrint({ foodFrequency, foodProduct }) {

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

    showCarbonFootprint()

    /* Set carbon emission in kilograms */
    function setCarbonEmissionUnits(carbonPrint) {
        document.getElementById("food-carbon-print-kgs-id").innerHTML = `Over an entire year your consumption of ${foodProduct[0].label} is contributing ${numberWithCommas(carbonPrint)} kilograms to your annual greenhouse gas emissions.`

        document.getElementById("food-equivalent-car-id").innerHTML = `That's the equivalent of driving a regular petrol car for ${numberWithCommas((carbonPrint * 4.33).toFixed(0))} Kilometers.`

    }

    return (
        /* carbon print stats container */
        < div className="carbon-print-revealed-container carbon-print-food-revealed-container" >
            {/* carbon print in kgs */}
            < p className="food-carbon-print-kgs" id="food-carbon-print-kgs-id" >
            </p >
            {/* equivalent to car kilometers */}
            < p className="food-equivalent-car" id="food-equivalent-car-id" >
            </p >
        </div >
    )
}

export default (FoodCarbonPrint)