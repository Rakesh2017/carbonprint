import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo-white.svg';

const AppLogo = () => (
    <div className="site-logo">
        <Link to="/">
            <div className="site-logo-wrapper">
                <img src={Logo} alt="carbonPrint" height="63px" width="26px" />
                <h2>Carbon Print</h2>
            </div>
        </Link>
    </div>
);

export default (AppLogo);