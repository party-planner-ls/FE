import React, { Component } from "react";

import Party from "./Party"; //needs to be built out
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getParties } from "../actions"; //needs to be built out

import "./App.css";

class Parties extends Component {
  componentDidMount() {
    this.props.getParties();
  }
  render() {
    return (
      <div className="parties">
        <h1>Parties</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/parties/${party.id}`} key={party.id}>
                <Party
                  id={party.id}
                  guests={party.name}
                  date={party.date}
                  theme={party.theme}
                  budget={party.budget}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
  fetchingParties: state.fetchingParties
});

export default withRouter(
  connect(
    mapStateToProps,
    { getParties }
  )(Parties)
);
