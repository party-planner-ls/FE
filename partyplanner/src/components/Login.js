import React from "react";
import { connect } from "react-redux";
import Registration from "./Register";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    isRegistering: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerToggle = e => {
    e.preventDefault();
    this.setState({ isRegistering: true });
  };

  render() {
    let register;

    if (this.state.isRegistering) {
      register = <Registration />;
    } else {
      register = <button onClick={this.registerToggle}>Register</button>;
    }

    return (
      <>
        <h1>Party Planner</h1>
        <div>
          <form>
            <div>
              <label>Username </label>
              <input type="text" placeholder="Username" name="username" />
            </div>
            <div>
              <label>Password </label>
              <input type="password" placeholder="Password" name="password" />
            </div>
            {register}
          </form>
        </div>
      </>
    );
  }
}

export default Login;
