import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Parties from "./components/Parties";
import Party from "./components/Party";

import { devMode, devSettings } from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(devMode);
    if (devMode) {
      localStorage.setItem("token", devSettings.devToken);
    }
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("partyId");
    localStorage.removeItem("token");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              {localStorage.getItem("token") ? (
                <>
                  <NavLink to="/parties" exact activeClassName="current">
                   <strong>Parties</strong> 
                  </NavLink>
                  <NavLink to="//parties/:id" exact activeClassName="current">
                     <strong>Party</strong>
                  </NavLink>
                  <button
                    className="submitBtn"
                    onClick={this.logout}
                    to="/home"
                  >
                     <strong>Logout</strong>
                  </button>
                </>
              ) : (
                <React.Fragment>
                  <NavLink to="/" exact activeClassName="current">
                     <strong>Home</strong>
                  </NavLink>
                  <NavLink to="/login" exact activeClassName="current">
                     <strong>Login</strong>
                  </NavLink>
                  <NavLink to="/register" exact activeClassName="current">
                     <strong>Register</strong>
                  </NavLink>
                </React.Fragment>
              )}
            </ul>
          </nav>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/parties" component={Parties} />
          <Route exact path="/parties/:id" component={Party} />
        </div>
      </Router>
    );
  }
}

export default App;
