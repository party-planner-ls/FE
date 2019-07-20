import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function PurchaseModal(props) {
  // this is pulled from the Material-UI Form Dialog example
  // it uses react hooks, which allows you to utilize state on functional components
  const { onClose, ...other } = props;
  const [values, setValues] = useState({
    price: props.item.price
  });

  function handleClose() {
    onClose(false, props.price);
  }

  function handleSubmit() {
    onClose(true, values.price);
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
      <DialogTitle id="form-dialog-title">Enter Purchase Price</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the purchase price of {props.item.name}.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="price"
          label="Purchase Price"
          value={values.price}
          onChange={handleChange("price")}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              handleSubmit();
            }
          }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
