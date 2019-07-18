import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Parties from "./components/Parties";
import Party from "./components/Party";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/parties" component={Parties} />
        <Route exact path="/parties/:id" component={Party} />
      </div>
    </Router>
  );
}

export default App;
