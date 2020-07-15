import React from 'react';
import { Container, } from '@material-ui/core';

const AppCTA = () => (
    <Container>
        <div className="site-cta">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="form-newsletter">
                <label>
                    <input type="text" required placeholder="Your Name"></input>
                </label>
                <label>
                    <input type="email" required placeholder="Your Email Address" ></input>
                </label>
                <input type="submit" value="Get Started"></input>
            </div>            
        </div>            
    </Container>
)

export default (AppCTA);