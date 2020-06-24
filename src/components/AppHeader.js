import React from 'react';

import AppLogo from './AppHeader/AppLogo';
import AppNav from './AppHeader/AppNav';

import {
    Container,
} from '@material-ui/core';


const AppHeader = () => (    
    <header>
        {/* .site-header-container main class to structure header area */}
        <Container>
            <div className="site-header-container">
                <AppLogo />
                <AppNav />
            </div>            
        </Container>
    </header>
);

export default (AppHeader);