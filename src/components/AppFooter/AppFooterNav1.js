import React from 'react';
import { Link } from 'react-router-dom';

const AppFooterNav1 = () => (
    <nav>
        <ul>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    </nav>

);

export default AppFooterNav1;