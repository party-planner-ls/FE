import React, { Component } from "react";
import { Register } from "../Actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Registration extends Component {
  state = {
    credentials: {
      userName: "",
      password: "",
    }
  };

  changeHandler = e => {   
    console.log(e.target.value);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e =>{
    e.preventDefault();
    this.props.Register(this.state.credentials)
    .then(() => {
      this.props.history.push('/login')
    });
  }
  render() {
    return (
      <div className="loginPage">
        <form className="pageLayout" onSubmit={this.Register}>
          <h2>Registration Page</h2>
          <div className="userMessage">Create your personal login!</div>
          <div className="inputField">
            <label>UserName</label>
            <input
              className="userInput"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="inputField">
            <label>Password</label>
            <input
              className="userInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
            />
            <div>
            <button className="submitBtn">
            Sign Up!            
          </button>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}


export default withRouter(
  connect(
   { Register }
  )(Registration)
);
