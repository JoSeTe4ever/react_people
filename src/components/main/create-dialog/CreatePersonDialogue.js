import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

import './CreatePersonDialogue.css'

class CreatePersonDialogue extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleClose = this.close.bind(this);
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    close() {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button type="submit" variant="contained" color="primary" className={"createButton"} onClick={this.handleClickOpen}>
                    CREATE NEW PERSON
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add a new person by fullfilling the following formular
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Full name"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email"
                            type="email"
                            fullWidth
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CreatePersonDialogue;