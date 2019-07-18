import React from "react";
import { connect } from "react-redux";

class MoodBoard extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Mood Board</h1>
        </div>
        <div>
          <button>Add Image</button>
        </div>
        <div /* this will be the board container using flexbox to arrange the images */
        >
          {/* map over the array */}
        </div>
      </>
    );
  }
}

export default MoodBoard;
