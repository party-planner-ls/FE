import React from "react";
import PropTypes from "prop-types";

import PurchaseModal from "./PurchaseModal";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import Icon from "./Icon";

import "./App.css";

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isEditingName: false,
      modalOpen: false,
      startEditing: false
    };
  }

  setItem = () => {
    if (this.props.item) {
      this.setState({ item: this.props.item });
    }
  };

  closeModal = (purchased, price) => {
    this.setState({ modalOpen: false });
    this.setState(prevState => ({
      item: {
        ...prevState.item,
        purchased: purchased,
        price: price
      }
    }));
  };

  togglePurchased = () => {
    if (this.state.item.purchased) {
      this.setState(prevState => ({
        item: {
          ...prevState.item,
          purchased: !prevState.item.purchased
        }
      }));
    } else {
      this.setState({ modalOpen: true });
    }
  };

  componentDidMount = () => {
    this.setItem();
  };

  componentDidUpdate = () => {
    if (this.state.startEditing) {
      this.props.startEditingShoppingList();
      this.setState({ isEditingName: true, startEditing: false });
    }

    const isEditingName = this.state.isEditingName;
    const editingShoppingList = this.props.editingShoppingList;
    if (isEditingName && !editingShoppingList) {
      this.stopEditingLocally();
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      item: { ...prevState.item, [ev.target.name]: value }
    }));
  };

  stopEditingLocally = () => {
    this.setState({ isEditingName: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateItem(this.state.item.id, this.state.item);
    this.stopEditingLocally();
    this.props.stopEditingShoppingList();
  };

  handleCancel = event => {
    event.preventDefault();
    this.stopEditingLocally();
    this.props.stopEditingShoppingList();
  };

  handleEdit = () => {
    //turns edits off globally, which forces other edits to stop locally
    //and the other local edits will not resume once we turn them on right after
    this.setState({ startEditing: true });
    this.props.stopEditingShoppingList();
  };

  render() {
    const isEditingName = this.state.isEditingName;
    let nameComponent;
    let actionsComponent;

    if (isEditingName) {
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
            value={this.state.item.name}
            name="name"
            margin="normal"
            inputProps={{ "aria-label": "bare" }}
            onChange={this.changeHandler}
          />
        </>
      );
    } else {
      actionsComponent = (
        <IconButton onClick={() => this.handleEdit()}>
          <Icon name="edit" />
        </IconButton>
      );
      nameComponent = <>{this.props.item.name}</>;
    }
    if (!this.state.item) {
      return "Loading";
    } else {
      return (
        <li>
          <form onSubmit={this.handleSubmit}>
            <div className="shopping-list-item">
              <div className="buttons">{actionsComponent}</div>
              <div className="name">{nameComponent}</div>
              <div className="purchased">
                <Checkbox
                  checked={this.state.item.purchased}
                  onChange={this.togglePurchased}
                  value="purchased"
                  color="primary"
                  inputProps={{
                    "aria-label": "primary checkbox"
                  }}
                />
              </div>
              <div
                style={{
                  display: this.props.item.purchased ? "inline" : "none"
                }}
                className="price"
              >
                {this.props.item.price}
              </div>
              <PurchaseModal
                open={this.state.modalOpen}
                onClose={this.closeModal}
                item={this.state.item}
              />
            </div>
          </form>
        </li>
      );
    }
  }
}

export default ShoppingListItem;
