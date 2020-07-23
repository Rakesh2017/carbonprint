import React from 'react';
import HomeHero from '../components/AppHome/HomeHero';
import HomeFeatures from '../components/AppHome/HomeFeatures';
import AppCTA from '../components/AppCTA';

export default () => (
    
    <div>
        <div className="wrapper-hero">
            <HomeHero />
        </div>
        <HomeFeatures />
        <AppCTA />
    </div>
);
