import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShoppingListItem from "./ShoppingListItem";

import {
  updateShoppingListItem,
  deleteShoppingListItem,
  addShoppingListItem,
  startEditingShoppingList,
  stopEditingShoppingList
} from "../Actions";

import Icon from "./Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import "./App.css";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingListItem: false,
      startAdding: false,
      listItemToAdd: {
        name: "",
        purchased: false,
        price: 0
      }
    };
  }

  componentDidUpdate = () => {
    if (this.state.startAdding) {
      this.props.startEditingShoppingList();
      this.setState({ isAddingListItem: true, startAdding: false });
    }

    const isEditingName = this.state.isAddingListItem;
    const editingShoppingList = this.props.editingShoppingList;
    if (isEditingName && !editingShoppingList) {
      this.setState({ isAddingListItem: false });
      this.handleCancel();
    }
  };

  clearAddedItem = () => {
    this.setState({ isAddingListItem: false });
    this.setState({
      listItemToAdd: {
        name: "",
        purchased: false,
        price: 0
      }
    });
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      listItemToAdd: { ...prevState.listItemToAdd, [ev.target.name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .addItem(this.state.listItemToAdd)
      .then(() => this.clearAddedItem());
  };

  handleCancel = () => {
    this.clearAddedItem();
  };

  handleAdd = () => {
    this.setState({ startAdding: true });
    this.props.stopEditingShoppingList();
  };

  render() {
    const isAddingListItem = this.state.isAddingListItem;
    let nameComponent;
    let actionsComponent;

    if (isAddingListItem) {
      actionsComponent = (
        <>
          <IconButton onClick={this.handleSubmit}>
            <Icon color="primary" name="check" />
          </IconButton>

          <IconButton onClick={this.handleCancel}>
            <Icon color="primary" name="close" />
          </IconButton>
        </>
      );
      nameComponent = (
        <>
          <TextField
            className="textfield"
            value={this.state.listItemToAdd.name}
            name="name"
            margin="normal"
            inputProps={{ "aria-label": "bare" }}
            onChange={this.changeHandler}
          />
        </>
      );
    } else {
      actionsComponent = (
        <IconButton onClick={this.handleAdd}>
          <Icon color="primary" name="add" />
        </IconButton>
      );
      nameComponent = <>{this.state.listItemToAdd.name}</>;
    }
    return (
      <div className="shopping-list">
        <h2>Shopping List</h2>
        <div className="shopping-list-table">
          <div className="shopping-list-header">
            <div className="buttons" />
            <div className="name">Name</div>
            <div className="purchased">Purchased</div>
            <div className="price">Price</div>
          </div>
          <div className="shopping-list-body">
            <ul>
              {this.props.shoppingList.map(item => {
                return (
                  <ShoppingListItem
                    key={item.id}
                    item={item}
                    updateItem={this.props.updateItem}
                    deleteItem={this.props.deleteItem}
                    startEditingShoppingList={
                      this.props.startEditingShoppingList
                    }
                    stopEditingShoppingList={this.props.stopEditingShoppingList}
                    editingShoppingList={this.props.editingShoppingList}
                  />
                );
              })}
            </ul>
          </div>
          <div className="shopping-list-add">
            <div className="buttons">{actionsComponent}</div>
            <div className="name">{nameComponent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
  fetchingShoppingList: state.fetchingShoppingList,
  editingShoppingList: state.editingShoppingList
});

const mapDispatchToProps = dispatch => ({
  updateItem: (id, item) => dispatch(updateShoppingListItem(id, item)),
  addItem: item => dispatch(addShoppingListItem(item)),
  deleteItem: id => dispatch(deleteShoppingListItem(id)),
  startEditingShoppingList: () => dispatch(startEditingShoppingList()),
  stopEditingShoppingList: () => dispatch(stopEditingShoppingList())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);
