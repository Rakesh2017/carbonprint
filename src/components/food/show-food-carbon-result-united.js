import React from 'react';
import numberWithCommas from '../../global-functions/number-comma.js'

function FoodCarbonPrintUnited({ checkAddBtn, foodList }) {

    let foodNames = "", accumulatedCarbonPrint = 0
    let carbonData = "", carData = ""

    if (checkAddBtn && foodList.length > 1) {
        foodList.forEach(element => {
           
            foodNames += element.product + ", "
            accumulatedCarbonPrint = element.userCarbonPrint + accumulatedCarbonPrint
        });
        carbonData = `Over an entire year your consumption of ${foodNames.slice(0, -2)} is contributing ${numberWithCommas((accumulatedCarbonPrint).toFixed(2))} kilograms to your annual greenhouse gas emissions.`
        carData = `That is equivalent to driving a car for ${numberWithCommas((accumulatedCarbonPrint * 4.33).toFixed(2))} kilometers.`
    }

   

    if (checkAddBtn) {
     if (foodList.length < 2) {
            document.getElementById("carbon-print-revealed-container-id").style.display = "none"
     } else {
                     document.getElementById("carbon-print-revealed-container-id").style.display = "block"
 
     }
    }
 
    return (
        /* accumulated Food carbon footprint */
        < div id="carbon-print-revealed-container-id" className="carbon-print-revealed-container carbon-print-food-united-revealed-container"
        style={{display:"none"}}
         >
            <h2>Your Accumulated Carbon footprint Result.</h2>
            {/* carbon print in kgs */}
            < p className="food-united-carbon-print-kgs" id="food-carbon-print-united-kgs-id" >
             {carbonData}
            </p >
            {/* equivalent to car kilometers */}
            < p className="food-united-equivalent-car" id="food-united-equivalent-car-id" >
            {carData}
            </p >
        </div >
    )
}

export default (FoodCarbonPrintUnited)