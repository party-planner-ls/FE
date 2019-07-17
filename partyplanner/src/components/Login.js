import React from 'react';
import {connect} from 'react-redux';
import {React, Component} from 'react';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                
            }
        });
    }
        login = e => {
            e.preventDefault();
            this.props.login(this.state.credentials).then(() => this.props.history.push('/'))
        }

       render(){
        return(
            <div className = 'loginPage'>
                 <form className = 'pageLayout' onSubmit={this.login}>
                    <h2>Login Page</h2>
                    <div className = 'userMessage'>
                       Welcome Back!
                    </div>
                    <div className = 'inputField'>
                    <label>Username</label>
                    <input 
                         className="userInput"
                         type="text"
                         name="username"
                         placeholder="Username"
                         value={this.state.credentials.username}
                         onChange={this.changeHandler}
                     />
            </div>
            <div className = 'inputField'>
                        <label>Password</label>
                        <input className="userInput"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.changeHandler}
                        />
          </div>
          <button className= 'submitBtn'>
                        {this.props.loginStage ? (
                            <Loader
                                type = 'Puff'
                                color = '#5b92eb'
                                height = '100'
                                width = '100'
                                />
                        ) : (
                            'Login'
                       )}
                    </button>
                </form>
            </div>    
        )
       } 
}