import React, { Fragment } from 'react';
import './App.scss';

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
import Food from './pages/food';


function App(props) {
  return (
    <Fragment>
      <Router>
        <AppHeader /> 
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/carbon-impact" component={CarbonImpact} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/food" component={Food} />
          </Switch>
        </main>
        <AppFooter />
      </Router>
    </Fragment>
  );
}

export default (App);