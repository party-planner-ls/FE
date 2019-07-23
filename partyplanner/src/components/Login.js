import { withRouter } from "react-router-dom";
import React, { Component} from "react";
import {LOGIN} from '../Actions';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import './App.css';

class Login extends Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log('did i make idt here')
    this.props
      .LOGIN(this.state.credentials)
      .then(() => {
         this.props.history.push(`/parties/{userId}`)
     })
  };

  render() {
    return (
      <div className="loginPage">
        <form className="pageLayout" onSubmit={this.login}>
          <h2>Login Page</h2>
          <div className="userMessage">Welcome Back!</div>
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
         
          <div>
          <button className="submitBtn" type = 'submit'>
          {this.props.loggingIn ? (
            <Loader
              type = 'Rings'
              color = '#00ff00'
              height = {80}
              width = {80}
              />
          ):
          ('Login')
          }
          
          </button>
          </div>
          </div>
           </div>
         </form>
         <div>
         </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn, 
  error: state.error
});

export default withRouter(
 connect( 
  mapStateToProps, 
  {LOGIN}
)(Login)
);
