import React from "react";
import PropTypes from "prop-types";

import Checkbox from "./Checkbox";

const Todo = ({ onClick, purchased, description, id, price }) => (
  <li>
    <label>
      <Checkbox
        id={id}
        description={description}
        onClick={onClick}
        purchased={purchased}
      />
      <span>{description}</span>
      <span
        style={{
          display: purchased ? "inline" : "none"
        }}
      >
        {price}
      </span>
    </label>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  purchased: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Todo;
