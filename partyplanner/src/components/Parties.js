import React, { Component } from "react";

import PartyForList from "./PartyForList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getParties } from "../Actions";

import "./Reset.css";
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
          {this.props.parties.map(party => {
            return (
              <Link to={`/parties/${party.id}`} key={party.id}>
                <PartyForList
                  id={party.id}
                  guests={party.guests}
                  name={party.name}
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
