import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/Logo.svg';

const AppLogo = () => (
    <div className="site-logo">
        <Link to="/">
            <img src={Logo} alt="carbonPrint" height="70px" width="120px" /></Link>
    </div>
);

export default (AppLogo);