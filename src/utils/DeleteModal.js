import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

export default function DeleteModal({
  handleDelete,
  setHandleDelete,
  currentItem,
  deleteItem,
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setHandleDelete(false);
  };

  return (
    <div>
      <Modal
        open={handleDelete}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Delete</h2>
          <p id="simple-modal-description">Are you sure you want to delete ?</p>
          {/* {currentItem} */}
          <div className="mt-3">
            {/* Handle Delete action */}
            <Button
              variant="contained"
              color="default"
              size="small"
              className="mr-3"
              onClick={(e) => deleteItem(currentItem.slug)}
            >
              Confrim
            </Button>

            {/* Handle cancel button */}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => setHandleDelete(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function getModalStyle() {
  const top = 30;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    borderRadius: "5px",
    width: "30%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));
