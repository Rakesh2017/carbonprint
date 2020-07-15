import React from 'react';

import {
    Container,
} from '@material-ui/core';

import AppFooterLogo from "./AppFooter/AppFooterLogo";
import AppFooterNav1 from "./AppFooter/AppFooterNav1";

const AppFooter = () => (    
    <footer className="site-footer" >
        <Container>
            <div className="site-footer-container">
                <div className="site-footer-col-1">
                    <AppFooterLogo />
                </div>
                
                <div className="site-footer-col-2">
                    <AppFooterNav1 />
                    <p><small>&copy; Copyright 2020 CarbonPrint. All rights reserved.</small></p>
                </div>
            </div>
        </Container>
    </footer>
);

export default (AppFooter);