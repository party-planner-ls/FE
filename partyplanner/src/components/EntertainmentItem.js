import React from "react";

import DeleteModal from "./DeleteModal";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import Icon from "./Icon";

import "./App.css";

class EntertainmentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isEditingName: false,
      deleteModalOpen: false,
      startEditing: false
    };
  }

  setItem = () => {
    if (this.props.item) {
      this.setState({ item: this.props.item });
    }
  };

  closeDeleteModal = deleted => {
    this.setState({ deleteModalOpen: false });
    if (deleted) {
      this.props.deleteItem(this.state.item.id, this.props.partyId);
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

  updateItem = () => {
    this.props.updateItem(this.state.item);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.updateItem();
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

  handleDelete = () => {
    this.setState({ deleteModalOpen: true });
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
        <>
          <IconButton onClick={() => this.handleDelete()}>
            <Icon name="delete" />
          </IconButton>
          <IconButton onClick={() => this.handleEdit()}>
            <Icon name="edit" />
          </IconButton>
        </>
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
              <Checkbox
                checked={this.state.item.purchased}
                onChange={this.togglePurchased}
                color="primary"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </div>
            <div className="price">{this.props.item.price}</div>
            <div>
              <DeleteModal
                open={this.state.deleteModalOpen}
                onClose={this.closeDeleteModal}
                item={this.state.item}
              />
            </div>
          </form>
        </li>
      );
    }
  }
}

export default EntertainmentItem;
