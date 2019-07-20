import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteParty, getParties } from "../Actions";

import ShoppingList from "./ShoppingList";
import TodoList from "./TodoList";

import "./Reset.css";
import "./App.css";

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: null
    };
  }

  componentDidMount = () => {
    if (!this.props.parties.length) {
      this.props.getParties(this.props.userId);
    }
  };

  render() {
    let party = null;
    if (this.props.parties) {
      party = this.props.parties.find(
        party => `${party.id}` === this.props.match.params.id
      );
    }

    if (!party) {
      return <h2>Loading party data...</h2>;
    }

    return (
      <div className="party-container">
        <div className="party">
          <div className="party-info">
            <h1 className="name">{party.name}</h1>
            <p>Theme: {party.theme}</p>
            <p>Guests: {party.guests}</p>
            <p>Budget: {party.budget}</p>
          </div>
          <ShoppingList partyId={party.id} />
          <div className="todo-list">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
  fetchingParties: state.fetchingParties,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  deleteParty: id => dispatch(deleteParty(id)),
  getParties: userId => dispatch(getParties(userId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Party)
);
