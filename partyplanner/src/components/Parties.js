import React, { Component } from "react";

import PartyForList from "./PartyForList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getParties, deleteParty, addParty, editParty } from "../Actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "./Icon";
import PartyAddEditModal from "./PartyAddEditModal";

import "./Reset.css";
import "./App.css";

const emptyNewParty = {
  name: "",
  theme: "",
  budget: "",
  guests: "",
  date: ""
};

class Parties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPartyModalOpen: false
    };
  }

  componentDidMount() {
    this.props.getParties(this.props.userId);
  }

  handleAdd = () => {
    this.setState({ addPartyModalOpen: true });
  };

  closeAddPartyModal = (added, party) => {
    this.setState({ addPartyModalOpen: false });
    if (added) {
      this.props.addParty(party, this.props.userId);
    }
  };

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
                    editParty={this.props.editParty}
                    userId={this.props.userId}
                  />
                </Link>
              );
            })}
          </div>
          <PartyAddEditModal
            open={this.state.addPartyModalOpen}
            onClose={this.closeAddPartyModal}
            item={{ ...emptyNewParty }}
            mode="add"
          />
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
  deleteParty: (partyId, userId) => dispatch(deleteParty(partyId, userId)),
  addParty: (party, userId) => dispatch(addParty(party, userId)),
  editParty: (party, partyId, userId) =>
    dispatch(editParty(party, partyId, userId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Parties)
);
