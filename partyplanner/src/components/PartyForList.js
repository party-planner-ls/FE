import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteParty } from "../Actions";

const PartyForList = props => {
  return (
    <div className="party-container">
      <div className="party">
        <div className="party-info">
          <p>Name: {props.name}</p>
          <p>Theme: {props.theme}</p>
          <p>Guests: {props.guests}</p>
          <p>Budget: {props.budget}</p>
        </div>
      </div>
    </div>
  );
};

export default PartyForList;
