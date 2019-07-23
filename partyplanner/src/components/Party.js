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

    let remainingBudget;
    if (this.props.shoppingList.length) {
      remainingBudget = party.budget;
      console.log(this.props.shoppingList);
      const budgetUsed = this.props.shoppingList
        .filter(e => e.purchased)
        .map(e => e.price)
        .reduce((acc, curr) => acc + curr, 0);
      remainingBudget -= budgetUsed;
    } else {
      remainingBudget = party.budget;
    }
    const remainingBudgetElement = <p>Remaining Budget: {remainingBudget}</p>;

    return (
      <div className="party-container">
        <div className="party">
          <div className="party-info">
            <h1 className="name">{party.name}</h1>
            <p>Theme: {party.theme}</p>
            <p>Guests: {party.guests}</p>
            <p>Date: {party.date}</p>
            <p>Budget: {party.budget}</p>
            {remainingBudgetElement}
          </div>
          <ShoppingList partyId={party.id} />
          <TodoList partyId={party.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
  shoppingList: state.shoppingList,
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
