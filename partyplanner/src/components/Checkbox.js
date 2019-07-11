import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, description, purchased = false, onClick }) => (
  <input
    type="checkbox"
    id={id}
    name={description}
    checked={purchased}
    onChange={onClick}
  />
);

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  purchased: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Checkbox;
