import React, { Component } from "react";
import { Register } from "../Actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from 'react-loader-spinner';
import './App.css';

class Registration extends Component {
  state = {
    credentials: {
      email: "",
      password: ""
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

  register = e => {
    e.preventDefault();
    this.props.Register(this.state.credentials)
    .then(() => {
        this.props.history.push('/login');
    });
  };

    render() {
    return (
      <div className="loginPage">
        <form className="pageLayout" onSubmit={this.register}>
          <h2>Registration Page</h2>
          <div className="userMessage">Create your personal login!</div>
          <div className = 'inputStyle'>
          <div className= ' userData'>
          <div className="inputField">
           
            <label><strong>Email</strong></label>
            <input
              className="userInput"
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.credentials.email}
              onChange={this.changeHandler}
            />
          </div>

          <div className="inputField">
            <label><strong>Password</strong></label>
            <input
              className="userInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
            />
           
          </div>
          </div>
          <div>
            <button className="submitBtn" type = 'submit'>
             {this.props.isRegistering ? (
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
            </div>
           
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRegistering: state.isRegistering, 
  error: state.error
});


export default withRouter(
  connect(
   mapStateToProps,
   { Register }
  )(Registration)
);
