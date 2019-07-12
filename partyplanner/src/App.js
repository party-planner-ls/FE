import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Parties from "./components/Parties";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/parties" component={Parties} />
      </div>
    </Router>
  );
}

export default App;
