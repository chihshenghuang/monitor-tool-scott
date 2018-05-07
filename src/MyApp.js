import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const DEFAULT = {
  value: 1,
};

const MyApp = (props) => (
  <div className="container">
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item"
          href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28" />
        </a>
        <div className="navbar-burger burger"
          data-target="navbarTop">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarTop"
        className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item"
            to="/">ServerMonitorPage</Link>
          <Link className="navbar-item"
            to="/ReleaseControlPage">ReleaseControlPage</Link>
          <div className="navbar-item"
            onClick={() => {
              props.dispatch({
                type: 'ADD',
                value: DEFAULT.value,
              });
              DEFAULT.value += 3;
              console.log(DEFAULT.value);
            }}>Version: {props.version}</div>
        </div>
      </div>
    </nav>
    <Route exact path="/" component={ServerMonitorPage} />
    <Route path="/ReleaseControlPage" component={ReleaseControlPage} />
  </div>
)

export default connect(state => {
  return {
    version: state.version
  }
})(MyApp);