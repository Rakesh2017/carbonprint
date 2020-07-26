import React from 'react';
import { Container, } from '@material-ui/core';

const AppCTA = () => (
    <Container>
        <div className="site-cta">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="form-newsletter">
                <label>
                    <input type="text" required placeholder="Your Name" name="name" aria-label="enter name"></input>
                </label>
                <label>
                    <input type="email" required placeholder="Your Email Address" name="email" aria-label="enter email"></input>
                </label>
                <input type="submit" value="Get Started" aria-label="submit"></input>
            </div>            
        </div>            
    </Container>
)

export default (AppCTA);