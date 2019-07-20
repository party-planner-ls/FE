import React, { Component } from "react";
import { Register } from "../Actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './App.css';

class Registration extends Component {
  state = {
    credentials: {
      userName: "",
      password: "",
      verifyPassword: ""
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

  checkPassword = e => {
    if(e.password.match(e.verifyPassword)){

    }
    else{
      alert()
    }
  }
  render() {
    return (
      <div className="loginPage">
        <form className="pageLayout" onSubmit={this.Register}>
          <h2>Registration Page</h2>
          <div className="userMessage">Create your personal login!</div>
          <div className = 'inputStyle'>
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
           
          </div>
          <div className="inputField">
            <label>Verify Password</label>
            <input
              className="userInput"
              type="password"
              name="password"
              placeholder="Verify Password"
              value={this.state.credentials.verifyPassword}
              onChange={this.changeHandler}
            />
            </div>
            </div>
          <div>
            <button className="submitBtn">
             {this.props.loggingIn ? (
            <Loader
              type = 'Rings'
              color = '#00ff00'
              height = {80}
              width = {80}
              />
          ):
          ('Sign Up!')
          }            
          </button>
            </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn, 
  error: state.error
});


export default withRouter(
  connect(
   mapStateToProps,
   { Register }
  )(Registration)
);
