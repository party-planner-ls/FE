import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../Actions";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Nav = props => {
  const logout = e => {
    e.preventDefault();
    props.logout();
    props.history.push(`/`);
  };
  return (
    <nav>
      {props.isLoggedIn ? (
        <>
          <NavLink to="/" exact activeClassName="current">
            Home
          </NavLink>
          <NavLink to="/parties" exact activeClassName="current">
            Parties
          </NavLink>
          <button className="submitBtn" onClick={logout} to="/home">
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/" exact activeClassName="current">
            Home
          </NavLink>
          <NavLink to="/login" exact activeClassName="current">
            Login
          </NavLink>
          <NavLink to="/register" exact activeClassName="current">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
