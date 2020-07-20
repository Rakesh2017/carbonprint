import React, { Fragment, useEffect } from 'react';
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
// import Food from './pages/food';
// import Flight from './pages/flight';

function App() {

  useEffect(() => {
    window.onscroll = function () {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector('header').classList.add('header-fixed');
      } else {
        document.querySelector('header').classList.remove('header-fixed');
      }
    }
  });

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
            
          </Switch>
        </main>
        <AppFooter />
      </Router>
    </Fragment>
  );
}

export default (App);