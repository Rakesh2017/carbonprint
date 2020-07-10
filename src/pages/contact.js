import React from 'react';
import {
    Container,
} from '@material-ui/core';

export default () => (
    <Container class = "contact-us-container">
        <h1>Contact Us</h1>

        <img class="heroImage" src="../images/hero.png" alt="placeholder"/>
        <div class = "address">
            <img src="" alt="addressIcon"/>
            <p> The Lorem ipsum </p>
            <p> 6798 North genyg Drive, Suite 876</p>
            <p> dkfksdj, kjfksdhfk</p>       
        </div>

        <div class = "phoneNumber">
            <img src=" " alt="phoneIcon"/>
            <p>+1-778-(xxx)-(xxxx)</p>
        </div>

        <div class = "email">
            <img src=" " alt="emailIcon"/>
            <p>carbonprint@gmail.com</p>
        </div>
    </Container>
);