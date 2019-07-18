import React from "react";
import PropTypes from "prop-types";

import PurchaseModal from "./PurchaseModal";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";

import "./App.css";

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isEditingName: false,
      modalOpen: false
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

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      item: { ...prevState.item, [ev.target.name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateItem(this.state.item.id, this.state.item);
    this.setState({ isEditingName: false });
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({ isEditingName: false });
  };

  render() {
    const isEditingName = this.state.isEditingName;
    let nameComponent;

    if (isEditingName) {
      nameComponent = (
        <>
          <IconButton onClick={this.handleSubmit}>
            <Icon color="primary">check</Icon>
          </IconButton>

          <IconButton onClick={this.handleCancel}>
            <Icon color="primary">close</Icon>
          </IconButton>

          <TextField
            value={this.state.item.name}
            name="name"
            margin="normal"
            inputProps={{ "aria-label": "bare" }}
            onChange={this.changeHandler}
          />
        </>
      );
    } else {
      nameComponent = (
        <>
          <IconButton onClick={() => this.setState({ isEditingName: true })}>
            <Icon>edit</Icon>
          </IconButton>
          <span className="shopping-list-item-name">
            {this.props.item.name}
          </span>
        </>
      );
    }
    if (!this.state.item) {
      return "Loading";
    } else {
      return (
        <li>
          <form onSubmit={this.handleSubmit}>
            {nameComponent}
            <Checkbox
              checked={this.state.item.purchased}
              onChange={this.togglePurchased}
              value="purchased"
              color="primary"
              inputProps={{
                "aria-label": "primary checkbox"
              }}
            />
            <PurchaseModal
              open={this.state.modalOpen}
              onClose={this.closeModal}
              item={this.state.item}
            />
            <span
              style={{
                display: this.props.item.purchased ? "inline" : "none"
              }}
            >
              {this.props.item.price}
            </span>
          </form>
        </li>
      );
    }
  }
}

export default ShoppingListItem;
