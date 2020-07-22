import React from 'react';
import HomeHero from '../components/AppHome/HomeHero';
import HomeFeatures from '../components/AppHome/HomeFeatures';
import AppCTA from '../components/AppCTA';

export default () => (
    
    <div>
        <div className="wrapper-hero">
            {console.log(process.env.REACT_APP_CLIENT_ID)}
            <HomeHero />
        </div>
        <HomeFeatures />
        <AppCTA />
    </div>
);