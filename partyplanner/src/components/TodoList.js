import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTodos, addTodo, deleteTodo } from "../Actions";
// import my

class TodoList extends React.Component {
  state = {
    newTask: "",
    completed: false
  };

  componentDidMount() {
    this.props.getTodos();
  }

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  addTask = e => {
    e.preventdefault();
    this.props.addTodo(this.state.newTask);
    this.setState({ newTask: "" });
  };

  // toggleComplete = index => {
  //     this.props......
  // }

  removeCompleted = e => {
    e.preventdefault();
    this.props.deleteTodo();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Todo List</h1>
        <div>
          {this.props.todoList.map(todo => {
            return <div key={todo.id}>{todo.name}</div>;
          })}
        </div>
        <form onSubmit="the add task function">
          <input
            type="text"
            value={this.state.newTask}
            placeholder="add new task"
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getTodos, addTodo, deleteTodo }
  )(TodoList)
);
