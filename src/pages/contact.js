import React from 'react';
import AppCTA from '../components/AppCTA';
import Image from '../images/our-values.jpg';
import { Container } from '@material-ui/core';

export default () => (
    <div className="contact-us-container">
        <Container>
        
            <div className="page-heading">
                <h1>Contact Us</h1>
            </div>

            <section>

            <div className="contact-section1">
                <div className="image-wrapper">
                    <img className="contact-image" alt="contact us" src={Image} />
                </div>                
                {/* <p>
                    Team Carbon Print is open to any kind of queries you have regarding Carbon Footprint, it's dependency on food and suggestions to reduce your individual carbon impression.
                </p> */}
            </div>

            <div className="contact-form">
                <label id="contact-label-name">Name</label>
                <input placeholder="Enter Your Name"></input>

                <label>Email</label>
                <input placeholder="Enter Your Email address"></input>

                <label>Message</label>
                {/* <input id="contact-message" placeholder="Enter Your Message" height="50%"></input> */}
                <textarea id="contact-message" placeholder="Enter Your Message"></textarea>

                <button id="contact-button">Send Message</button>
            </div>


            </section>
        </Container>

        <AppCTA />

    </div>
    
);