import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TodoListItem from "./TodoListItem";

import {
  getTodoList,
  addTodoListId,
  updateTodoListItem,
  deleteTodoListItem,
  addTodoListItem,
  startEditingTodoList,
  stopEditingTodoList
} from "../Actions";

import Icon from "./Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import "./App.css";

class TodoList extends React.Component {
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
    this.props.getTodoList(this.props.partyId);
  };

  componentDidUpdate = () => {
    if (this.state.startAdding) {
      this.props.startEditingTodoList();
      this.setState({ isAddingListItem: true, startAdding: false });
    }

    const isEditingName = this.state.isAddingListItem;
    const editingTodoList = this.props.editingTodoList;
    if (isEditingName && !editingTodoList) {
      this.setState({ isAddingListItem: false });
      this.handleCancel();
    }

    if (this.props.todoListId === -1) {
      this.props.addTodoListId(this.props.partyId);
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
        this.props.todoListId,
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
    this.props.stopEditingTodoList();
  };

  render() {
    if (this.props.fetchingTodoList) {
      return <h2>Fetching Todo List</h2>;
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
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="todo-list-table">
          <div className="todo-list-header">
            <div className="buttons" />
            <div className="name">Name</div>
            <div className="completed">Completed</div>
          </div>
          <div className="todo-list-body">
            <ul>
              {this.props.todoList.map(item => {
                return (
                  <TodoListItem
                    key={item.id}
                    item={item}
                    partyId={this.props.partyId}
                    getTodoList={this.props.getTodoList}
                    updateItem={this.props.updateItem}
                    deleteItem={this.props.deleteItem}
                    startEditingTodoList={this.props.startEditingTodoList}
                    stopEditingTodoList={this.props.stopEditingTodoList}
                    editingTodoList={this.props.editingTodoList}
                  />
                );
              })}
            </ul>
          </div>
          <div className="todo-list-add">
            <div className="buttons">{actionsComponent}</div>
            <div className="name">{nameComponent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList,
  todoListId: state.todoListId,
  fetchingTodoList: state.fetchingTodoList,
  editingTodoList: state.editingTodoList
});

const mapDispatchToProps = dispatch => ({
  getTodoList: partyId => dispatch(getTodoList(partyId)),
  addTodoListId: partyId => dispatch(addTodoListId(partyId)),
  updateItem: item => dispatch(updateTodoListItem(item)),
  addItem: (itemName, todoListId, partyId) =>
    dispatch(addTodoListItem(itemName, todoListId, partyId)),
  deleteItem: (id, partyId) => dispatch(deleteTodoListItem(id, partyId)),
  startEditingTodoList: () => dispatch(startEditingTodoList()),
  stopEditingTodoList: () => dispatch(stopEditingTodoList())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
