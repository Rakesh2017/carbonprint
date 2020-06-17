import React from 'react';

import { Link } from 'react-router-dom';

const AppFooterNav2 = () => (
    <nav>

    <h3>Nav 2</h3>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>

);

export default AppFooterNav2;