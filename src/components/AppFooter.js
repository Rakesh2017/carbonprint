import React from 'react';

import {
    Container,
} from '@material-ui/core';

import AppFooterLogo from "./AppFooter/AppFooterLogo";
import AppFooterNav1 from "./AppFooter/AppFooterNav1";
import AppFooterNav2 from "./AppFooter/AppFooterNav2";

const AppFooter = () => (    
    <footer className="site-footer" >
        <Container>
            <div className="site-footer-container">
                <div className="site-footer-col-1">
                    <AppFooterLogo />
                </div>
                
                <div className="site-footer-col-2">
                    <AppFooterNav1 />
                </div>

                <div className="site-footer-col-3">
                    <AppFooterNav2 />
                </div>
            </div>
        </Container>
    </footer>
);

export default (AppFooter);