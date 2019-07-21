import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, name, purchased = false }) => (
  <input type="checkbox" id={id} name={name} checked={purchased} />
);

export default Checkbox;
