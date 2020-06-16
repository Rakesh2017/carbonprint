import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    withStyles,
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
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                My React AppBar
            </Typography>
            <div className={classes.flex} />
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(AppHeader);