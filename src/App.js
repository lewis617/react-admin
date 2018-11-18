import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Protect from './Protect';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Redirect exact from="/" to="protect" />
        <Route path="/protect" component={Protect} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;