import React from 'react';

import { Link } from 'react-router-dom';

const AppNav = () => (
    
    <nav className="site-main-nav">
        <button className="main-nav-button">
            <i className="icon"></i>
            <span>Menu</span> 
        </button>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/calculator">Calculator</Link>
            </li>
            <li>
                <Link to="/carbon-impact">Carbon Impact</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/food">Food</Link>
            </li>
        </ul>
    </nav>

);

export default AppNav;