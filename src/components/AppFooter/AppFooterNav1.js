import React from 'react';

import { Link } from 'react-router-dom';

const AppFooterNav1 = () => (
    <nav>

    <h3>Nav 1</h3>
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

export default AppFooterNav1;