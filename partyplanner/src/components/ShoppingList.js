import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = props => {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ul>
        {props.shoppingList.map(item => {
          return <ShoppingListItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
  fetchingShoppingList: state.fetchingShoppingList
});

const mapDispatchToProps = dispatch => ({
  // deleteParty: id => dispatch(deleteParty(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);
