import React from 'react';
import numberWithCommas from '../global-functions/number-comma.js'

function FoodCarbonPrintUnited({ checkAddBtn, foodList }) {

    let foodNames = "", accumulatedCarbonPrint = 0
    let data = ""

    if (checkAddBtn && foodList.length > 1) {
        foodList.forEach(element => {
            console.log(element.userCarbonPrint)
            foodNames += element.product + ", "
            accumulatedCarbonPrint = element.userCarbonPrint + accumulatedCarbonPrint
        });
        data = `Over an entire year your consumption of ${foodNames.slice(0, -2)} is contributing ${numberWithCommas((accumulatedCarbonPrint * 4.33).toFixed(2))} kilograms to your annual greenhouse gas emissions.`
    }

    
 
    return (
        /* accumulated Food carbon footprint */
        < div className="carbon-print-revealed-container carbon-print-food-united-revealed-container" >
            {/* carbon print in kgs */}
            < p className="food-united-carbon-print-kgs" id="food-carbon-print-united-kgs-id" >
             {data}
            </p >
            {/* equivalent to car kilometers */}
            < p className="food-united-equivalent-car" id="food-united-equivalent-car-id" >
            </p >
        </div >
    )
}

export default (FoodCarbonPrintUnited)