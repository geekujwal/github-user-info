import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar
          title="GitHub Profile Finder"
          iconClassName="fab fa-github 3x"
        />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
