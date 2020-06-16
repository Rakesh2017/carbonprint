import React, { Fragment } from 'react';
import './styles/App.scss';
import {
  CssBaseline,
  withStyles,
  Container,
} from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/home';
import About from './pages/about';
import Calculator from './pages/calculator';
import CarbonImpact from './pages/carbon-impact';
import Contact from './pages/contact';
// import logo from './logo.svg';
// import './App.css';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

function App({ classes }) {
  return (
    <Fragment>
      <CssBaseline />
      <Router>

          <AppHeader />
          <main className={classes.main}>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/calculator" component={Calculator} />
                <Route exact path="/carbon-impact" component={CarbonImpact} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </Container>
          </main>
          <AppFooter />

      </Router>
    </Fragment>
  );
}

export default withStyles(styles)(App);