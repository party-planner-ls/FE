import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DeleteModal(props) {
  // this is pulled from the Material-UI Form Dialog example
  // it uses react hooks, which allows you to utilize state on functional components
  const { onClose, ...other } = props;

  function handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    onClose(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    onClose(true);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      {...other}
    >
      <DialogTitle id="form-dialog-title">Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>Delete {props.item.name}?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
