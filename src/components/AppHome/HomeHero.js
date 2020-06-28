import React from 'react';
import {
    Container,
    Button,
  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import heroImage from '../../images/hero.png';

const homehero = () => (
    <Container>
        <div className="hero-container">
            <div className="hero-text">
                <h1>Heading Home</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tenetur eius ullam atque officiis possimus, eaque consequatur fugit optio placeat. Eius, error aut! Laudantium enim sed doloribus est sunt deleniti quod officiis magni nisi perspiciatis laboriosam quidem ratione assumenda cupiditate pariatur beatae nemo, eos magnam in aspernatur tempora optio. Quam.</p>
                <Link to="/calculator">
                    <Button variant="contained" className="hero-button">Calculate your Carbon footprint</Button>
                </Link>

            </div>
            <div className="hero-image">
                <img src={heroImage} alt="carbonfootprint calculator" />
            </div>
        </div>
    </Container>
);

export default (homehero);