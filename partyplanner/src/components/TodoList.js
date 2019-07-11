import React from "react";
import { connect } from "react-redux";
import { ENGINE_METHOD_DIGESTS } from "constants";
// import my actions

class TodoList extends React.Component {
  state = {
    newTask: "",
    completed: false
  };

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  //   addTask = e => {
  //       e.preventdefault();
  //      this.props.......;
  //      this.setState({ newTask: '' })
  //   }

  // toggleComplete = index => {
  //     this.props......
  // }

  render() {
    return (
      <>
        {/* <div>
              map over existing list
              showing tasks and a completed or not completed indicator
          </div> */}
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
