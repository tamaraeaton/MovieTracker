import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

// Components
import UpdateAccount from './components/UpdateAccount';
import Homepage from './components/Homepage';
import Account from './components/Account';

// Parent component
export default class App extends Component {

  render() {
    return (
      <Router>

        <div>
          <Route path='/' exact component={Homepage} />
          <Route path='/account/:id' component={Account} />
          <Route path='/update/:id' component={UpdateAccount} />
          {/* <Route component={notFound} /> */}
        </div>

      </Router>
    )
  }
}
