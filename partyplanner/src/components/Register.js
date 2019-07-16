import {React, Component} from 'react';
import {Register} from '../Actions';
import connect from 'react-redux';

class Registration extends Component {
    state = {
        credentials: {
            userName: '',
            password: ''
        }
    };

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, [e.target.name]: e.target.value
            }
        });
    }

    addUser = e => {
        e.preventDefault();
        this.props.addUser(this.state.credentials).then(() => {
            
        });
    };

    render() {
        return(
            <div className = 'loginPage'>
                <form className = 'pageLayout' onSubmit={this.Register}>
                    <h2>Registration Page</h2>
                    <div className = 'userMessage'>
                        Create your personal login!
                    </div>
                    <div className = 'inputField'>
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
                            'Sign Up'
                       )}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({registering, err}) => ({
    registering,
    err
})

export default connect (
    mapStateToProps,
    {Register}
)(Registration);
