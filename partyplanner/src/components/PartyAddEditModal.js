import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function PartyAddEditModal(props) {
  // this is pulled from the Material-UI Form Dialog example
  // it uses react hooks, which allows you to utilize state on functional components
  const { onClose, ...other } = props;
  const [values, setValues] = useState({
    name: props.item.name || "",
    theme: props.item.theme || "",
    budget: props.item.budget || "",
    guests: props.item.guests || "",
    date: props.item.date || ""
  });

  function handleClose() {
    onClose(false, values);
  }

  function handleSubmit() {
    onClose(true, values);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      {...other}
    >
      <DialogTitle id="form-dialog-title">Add new party</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Party name"
          value={values.name}
          onChange={handleChange("name")}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="theme"
          label="Party theme"
          value={values.theme}
          onChange={handleChange("theme")}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="guests"
          label="Party guests"
          value={values.guests}
          onChange={handleChange("guests")}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="budget"
          label="Party budget"
          value={values.budget}
          onChange={handleChange("budget")}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="date"
          label="Party date"
          value={values.date}
          onChange={handleChange("date")}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          OK
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
