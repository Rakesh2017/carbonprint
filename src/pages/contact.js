import React from 'react';
import AppCTA from '../components/AppCTA';
import Image from '../images/hero-image.jpg';
import {
    Container,
} from '@material-ui/core';

export default () => (
    <Container class = "contact-us-container">
        <h1>Contact Us</h1>

        <div class = "contact-section1">
            <img class="contact-image" src={Image}/>
            <p>
                Team Carbon Print is open to any kind of queries you have regarding Carbon Footprint, it's dependency on food and suggestions to reduce your individual carbon impression.
            </p>         
        </div>

        <div class = "contact-form">
            <label id="contact-label-name">Name</label>
            <input placeholder="Enter Your Name"></input>

            <label>Email</label>
            <input placeholder="Enter Your Email address"></input>

            <label>Message</label>
            {/* <input id="contact-message" placeholder="Enter Your Message" height="50%"></input> */}
            <textarea id="contact-message" placeholder="Enter Your Message"></textarea>

            <button id="contact-button">Send Message</button>
        </div>

        <AppCTA />
    </Container>
);