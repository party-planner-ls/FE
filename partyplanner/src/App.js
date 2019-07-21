import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Parties from "./components/Parties";
import Party from "./components/Party";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />
          {/* HomePage gives an error currently, so we're commenting it out */}
          {/* <Route exact path="/" component={HomePage} /> */}
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
