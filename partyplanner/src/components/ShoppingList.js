import React from "react";
import PropTypes from "prop-types";

const ShoppingList = props => {
  return (
    <ul>
      {props.list.map(item => {
        return (
          <ShoppingListItem
            key={item.id}
            {...item}
            onClick={() => purchaseItem(item.id)} //onClick is set to be a function which invokes purchaseItem using the specific id of the item in question. It opens up a modal that allows the user to input a price which will be deducted from the budget
          />
        );
      })}
    </ul>
  );
};

ShoppingList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      purchased: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number
    }).isRequired
  ).isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default ShoppingList;
