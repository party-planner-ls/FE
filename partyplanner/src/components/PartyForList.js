import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "./Icon";
import DeleteModal from "./DeleteModal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#0067A3",
    borderRadius: 3,
    border: 0,
    color: "white",
    minHeight: 48,
    paddingTop: "11px",
    paddingLeft: "13px",
    paddingBottom: "0px",
    paddingRight: "0px",
    textTransform: "uppercase",
    width: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "10px"
  },
  partyName: {
    textAlign: "left"
  },
  deleteBox: {
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  },
  deleteButton: {
    color: "inherit"
  }
});

const PartyForList = props => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const closeDeleteModal = deleted => {
    setDeleteModalOpen(false);
    if (deleted) {
      props.deleteParty(props.partyId, props.userId);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteModalOpen(true);
  };

  const classes = useStyles();
  return (
    <>
      <Box classes={{ root: classes.root }} className="party-info">
        <span className={classes.partyName}>{props.name}</span>
        <Box className={classes.deleteBox}>
          <IconButton className={classes.deleteButton} onClick={handleSubmit}>
            <Icon name="delete" />
          </IconButton>
        </Box>
      </Box>
      <DeleteModal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        item={props.party}
      />
    </>
  );
};

export default PartyForList;
