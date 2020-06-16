import React from 'react';

import {
    AppBar,
    Typography,
    withStyles,
    Container,
} from '@material-ui/core';
import {
    Link
} from "react-router-dom";


const styles = {
    flex: {
        flex: 1
    },
};


const AppHeader = ({ classes }) => (    
    <AppBar position="static" color="transparent">
        <Container>
        <Typography component="div" style={{ height: '100px', display: 'flex' }}>
                <Typography variant="h6" color="inherit">
                    CarbonPrint
                </Typography>


                    <div className={classes.flex}>
                        <nav>
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
                            </ul>
                        </nav>
                    </div>
            </Typography>
        </Container>
    </AppBar>
);

export default withStyles(styles)(AppHeader);