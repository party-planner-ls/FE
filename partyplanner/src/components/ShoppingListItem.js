import React from "react";
import PropTypes from "prop-types";

import Checkbox from "./Checkbox";

const ShoppingListItem = ({ id, name, purchased, price }) => (
  <li>
    <label>
      <Checkbox id={id} description={name} purchased={purchased} />
      <span>{name}</span>
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

export default ShoppingListItem;
