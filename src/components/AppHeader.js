import React from 'react';

import AppLogo from './AppHeader/AppLogo';
import AppNav from './AppHeader/AppNav';

import {
    AppBar,
    Container,
} from '@material-ui/core';


const AppHeader = () => (    
    <AppBar position="static" color="transparent">
        {/* .site-header-container main class to structure header area */}
        <Container>
            <div className="site-header-container">
                <AppLogo />
                <AppNav />
            </div>            
        </Container>
    </AppBar>
);

export default (AppHeader);