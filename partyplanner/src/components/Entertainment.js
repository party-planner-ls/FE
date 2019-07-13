import React from "react";
import { connect } from "react-redux";
import { getEnt, addEnt, deleteEnt } from "../Actions";

class Entertainment extends React.Component {
  state = {
    entTitle: "",
    entDescription: "",
    cost: "",
    formShowing: false
  };

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    return (
      <>
        <h2>Entertainment</h2>
        {/* <div>
                  map over existing entertainment list
              </div> */}
        <button onClick="this wil be a function that removes button from display and shows the form">
          Add Entertainment
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ent: state.ent,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getEnt, addEnt, deleteEnt }
)(Entertainment);

class Form extends React.Component {
  render() {
    return (
      <>
        <form>
          <input type="text" placeholder="Entertainer(s)" name="entertainer" />
          <input type="text" placeholder="description" name="description" />
          <input type="text" placeholder="cost" name="cost" />
        </form>
      </>
    );
  }
}
