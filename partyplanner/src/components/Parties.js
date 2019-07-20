import React, { Component } from "react";

import PartyForList from "./PartyForList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getParties, deleteParty } from "../Actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "./Icon";

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
          <div className="parties-header">
            <h1>Parties</h1>
            <IconButton onClick={this.handleAdd}>
              <Icon color="primary" name="add" style={{ fontSize: "24px" }} />
            </IconButton>
          </div>

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
