import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h2>Welcome to the best party planner app on the web!</h2>
          <p>Wanna see what the hype is about?</p>
          <NavLink to="/register">Sign up now!</NavLink>
          <p>Already a part of the family?</p>
          <NavLink to="/login">Log in now!</NavLink>
        </div>
      </div>
    );
  }
}

export default HomePage;
