import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Food from './food';
import Flight from './flight';
import Travel from './travel';
import TotalResult from './total-result';


export default () => {

    const [foodCFP, setFoodCFP] = useState()
    const [flightCFP, setFlightCFP] = useState()
    const [travelCFP, setTravelCFP] = useState()

    const tabNavBack = () => {
        const navUl = document.querySelector('.tab-slider ul');
        const nav = document.querySelector('.tab-slider');
        const offSetWidth = navUl.scrollWidth - nav.offsetWidth;

        navUl.style.transform = "translateX(-" + offSetWidth + "px)";
    };

    const tabNavForward = () => {
        const navUl = document.querySelector('.tab-slider ul');
        navUl.style.transform = "translateX(0)";
    };

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-slider li');
        const tabContainers = document.querySelectorAll('.tab-container > div');

        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                tabs.forEach((item) => {
                    item.classList.remove("activeTab");
                })
                tab.classList.add("activeTab");

                tabContainers.forEach((container) => {
                    container.classList.remove("active");
                })
                tabContainers[tab.tabIndex].classList.add("active");
            })
        })
    }, []);


    return (

        <Container>
            <div className="page-heading">
                <h1>Carbon Footprint Calculator for Individuals</h1>
                <h3>Select the appropriate tab to calculate your Cabon Impact and compare it with the world !</h3>
            </div>
            
            <div className="carbon-calculator">
                <div className="tab-panel">
                    <div className="tab-nav">
                        <div onClick={tabNavBack}>&laquo;</div>
                        <div className="tab-slider">
                            <ul>
                                <li tabIndex="0" className="activeTab">Food</li>
                                <li tabIndex="1">Flight</li>
                                <li tabIndex="2">Travel</li>
                                <li tabIndex="3"><span>Result</span><span>Your Total Carbon Emission</span></li>
                            </ul>
                        </div>
                        <div onClick={tabNavForward}>&raquo;</div>
                    </div>
                    <div className="tab-container">
                        <div className="active">
                            <Food parentCallback={data => setFoodCFP(data)} />
                        </div>
                        <div>
                            <Flight parentCallback={data => setFlightCFP(data)} />
                        </div>
                        <div>
                            <Travel parentCallback={data => setTravelCFP(data)} />
                        </div>
                        <div>
                            <TotalResult foodCFP={foodCFP} flightCFP={flightCFP} travelCFP={travelCFP} />
                        </div>
                    </div>
                </div>


            </div>
        </Container>

    );
}
