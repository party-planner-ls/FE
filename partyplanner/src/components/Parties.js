import React, { Component } from "react";

import PartyForList from "./PartyForList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getParties, deleteParty } from "../Actions";

import "./Reset.css";
import "./App.css";

class Parties extends Component {
  componentDidMount() {
    this.props.getParties(this.props.userId);
  }

  render() {
    return (
      <>
        <div className="parties">
          <h1>Parties</h1>
          <div className="parties-group">
            {this.props.parties.map(party => {
              return (
                <Link to={`/parties/${party.id}`} key={party.id}>
                  <PartyForList
                    party={party}
                    partyId={party.id}
                    guests={party.guests}
                    name={party.name}
                    date={party.date}
                    theme={party.theme}
                    budget={party.budget}
                    deleteParty={this.props.deleteParty}
                    userId={this.props.userId}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
  fetchingParties: state.fetchingParties,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  getParties: userId => dispatch(getParties(userId)),
  deleteParty: (partyId, userId) => dispatch(deleteParty(partyId, userId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Parties)
);
