import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "./Icon";
import DeleteModal from "./DeleteModal";
import PartyAddEditModal from "./PartyAddEditModal";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    background: "#0067A3",
    borderRadius: 5,
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
  buttonBox: {
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  },
  buttons: {
    color: "inherit"
  },
  editButton: {
    marginRight: "-14px"
  }
});

const PartyForList = props => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const closeDeleteModal = deleted => {
    setDeleteModalOpen(false);
    if (deleted) {
      props.deleteParty(props.partyId, props.userId);
    }
  };

  const closeEditModal = (confirmed, updatedParty) => {
    setEditModalOpen(false);
    if (confirmed) {
      props.editParty(updatedParty, props.partyId, props.userId);
    }
  };

  const handleDeleteClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteModalOpen(true);
  };

  const handleEditClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setEditModalOpen(true);
  };

  const classes = useStyles();
  return (
    <Box classes={{ root: classes.root }} className="party-info">
      <span className={classes.partyName}>{props.name}</span>
      <Box className={classes.buttonBox}>
        <IconButton
          className={clsx(classes.buttons, classes.editButton)}
          onClick={handleEditClick}
        >
          <Icon name="edit" />
        </IconButton>
        <IconButton className={classes.buttons} onClick={handleDeleteClick}>
          <Icon name="delete" />
        </IconButton>
      </Box>
      <DeleteModal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        item={props.party}
      />
      <PartyAddEditModal
        open={editModalOpen}
        onClose={closeEditModal}
        item={props.party}
        mode="edit"
      />
    </Box>
  );
};

export default PartyForList;
