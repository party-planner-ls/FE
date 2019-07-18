import React from "react";
import PropTypes from "prop-types";

import pencil from "./pencil.png";
import Checkbox from "@material-ui/core/Checkbox";

import "./App.css";

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isEditingName: false
    };
  }

  setItem = () => {
    if (this.props.item) {
      this.setState({ item: this.props.item });
    }
  };

  displayModal = () => {
    this.togglePurchased();
  };

  togglePurchased = () => {
    this.setState(prevState => ({
      item: { ...prevState.item, purchased: !prevState.item.purchased }
    }));
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

  render() {
    const isEditingName = this.state.isEditingName;
    let nameComponent;

    if (isEditingName) {
      nameComponent = (
        <input
          type="text"
          name="name"
          onChange={this.changeHandler}
          placeholder="Name"
          value={this.state.item.name}
        />
      );
    } else {
      nameComponent = (
        <>
          <img
            src={pencil}
            className="edit-button"
            onClick={() => this.setState({ isEditingName: true })}
          />
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
            <label>
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
              <span
                style={{
                  display: this.props.item.purchased ? "inline" : "none"
                }}
              >
                {this.props.item.price}
              </span>
            </label>
          </form>
        </li>
      );
    }
  }
}

export default ShoppingListItem;
