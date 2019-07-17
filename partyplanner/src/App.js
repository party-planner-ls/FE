import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Parties from "./components/Parties";
import Party from "./components/Party";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/parties" component={Parties} />
        <Route exact path="/parties/:id" component={Party} />
      </div>
    </Router>
  );
}

export default App;
