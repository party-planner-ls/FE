import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShoppingListItem from "./ShoppingListItem";

import { updateShoppingListItem, deleteShoppingListItem } from "../Actions";

import "./App.css";

const ShoppingList = props => {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <div className="shopping-list-header">
        <div className="buttons" />
        <div className="name">Name</div>
        <div className="purchased">Purchased</div>
        <div className="price">Price</div>
      </div>
      <div className="shopping-list-body">
        <ul>
          {props.shoppingList.map(item => {
            return (
              <ShoppingListItem
                key={item.id}
                item={item}
                updateItem={props.updateItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
  fetchingShoppingList: state.fetchingShoppingList
});

const mapDispatchToProps = dispatch => ({
  updateItem: (id, item) => dispatch(updateShoppingListItem(id, item)),
  deleteItem: id => dispatch(deleteShoppingListItem(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);
