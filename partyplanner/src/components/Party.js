import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteParty } from "../Actions";

import ShoppingList from "./ShoppingList";
import TodoList from "./TodoList";

import "./Reset.css";
import "./App.css";

const Party = props => {
  const deleteParty = event => {
    event.preventDefault();
    props.deleteParty(party.id).then(() => props.history.push("/parties"));
  };

  let party = null;
  if (props.parties) {
    party = props.parties.find(
      party => `${party.id}` === props.match.params.id
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
        <ShoppingList />
        <div className="todo-list">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  parties: state.parties,
  fetchingParties: state.fetchingParties
});

const mapDispatchToProps = dispatch => ({
  deleteParty: id => dispatch(deleteParty(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Party)
);
