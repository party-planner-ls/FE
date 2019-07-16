import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteParty, getParties } from "../Actions";

import ShoppingList from "./ShoppingList";

class Party extends Component {
  state = {
    deletePartys: null
  }

  componentDidMount(){
    this.props.getParty();
  }
  
  deleteParty = event => {
    event.preventDefault();
    props.deleteParty(party.id).then(() => props.history.push("/parties"));
  };

 render(){
  let party = null;
  if (props.parties) {
    party = props.parties.find(
      party => `${party.id}` === props.match.params.id
    );
  }

  if (!party) {
    return <h2>Loading party data...</h2>;
  }
 }

  

  return (
    <div className="party-container">
      <div className="party">
        <div className="party-info">
          <p>Name: {party.name}</p>
          <p>Theme: {party.theme}</p>
          <p>Guests: {party.guests}</p>
          <p>Budget: {party.budget}</p>
        </div>
        <div className="shopping-list">
          {/* <ShoppingList list={party.ShoppingList} purchaseItem={() => null} /> */}
          {/* need to build out purchaseItem function */}
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
    mapDispatchToProps,
    {getParties, deleteParty}
  )(Party)
);