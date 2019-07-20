import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShoppingListItem from "./ShoppingListItem";

import {
  getShoppingList,
  addShoppingListId,
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
        name: ""
      }
    };
  }

  componentDidMount = () => {
    this.props.getShoppingList(this.props.partyId);
  };

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

    if (this.props.shoppingListId === -1) {
      this.props.addShoppingListId(this.props.partyId);
    }
  };

  clearAddedItem = () => {
    this.setState({ isAddingListItem: false });
    this.setState({
      listItemToAdd: {
        name: ""
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
      .addItem(
        this.state.listItemToAdd.name,
        this.props.shoppingListId,
        this.props.partyId
      )
      .then(() => {
        console.log("post-add");
        this.clearAddedItem();
      });
  };

  handleCancel = () => {
    this.clearAddedItem();
  };

  handleAdd = () => {
    this.setState({ startAdding: true });
    this.props.stopEditingShoppingList();
  };

  render() {
    if (this.props.fetchingShoppingList) {
      return <h2>Fetching Shopping List</h2>;
    }

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
                    partyId={this.props.partyId}
                    getShoppingList={this.props.getShoppingList}
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
  shoppingListId: state.shoppingListId,
  fetchingShoppingList: state.fetchingShoppingList,
  editingShoppingList: state.editingShoppingList
});

const mapDispatchToProps = dispatch => ({
  getShoppingList: partyId => dispatch(getShoppingList(partyId)),
  addShoppingListId: partyId => dispatch(addShoppingListId(partyId)),
  updateItem: item => dispatch(updateShoppingListItem(item)),
  addItem: (itemName, shoppingListId, partyId) =>
    dispatch(addShoppingListItem(itemName, shoppingListId, partyId)),
  deleteItem: (id, partyId) => dispatch(deleteShoppingListItem(id, partyId)),
  startEditingShoppingList: () => dispatch(startEditingShoppingList()),
  stopEditingShoppingList: () => dispatch(stopEditingShoppingList())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);
