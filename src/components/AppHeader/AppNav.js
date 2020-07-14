import React from 'react';

import { Link } from 'react-router-dom';

const toggleButton = function () {
    document.querySelector(".site-main-nav").classList.toggle("active");
}

const AppNav = () => (
    
    <nav className="site-main-nav">
        <div className="nav-wrapper">
            <div className="button-mobile">
                <button onClick={toggleButton} className="main-nav-button">
                    <i className="menu-icon"></i>
                </button>
            </div>

            <ul>
                <li>
                    <Link to="/" onClick={toggleButton}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleButton}>About</Link>
                </li>
                <li>
                    <Link to="/calculator" onClick={toggleButton}>Calculator</Link>
                </li>
                <li>
                    <Link to="/carbon-impact" onClick={toggleButton}>Carbon Impact</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={toggleButton}>Contact Us</Link>
                </li>
            </ul>
        </div>
        
    </nav>

);

export default AppNav;