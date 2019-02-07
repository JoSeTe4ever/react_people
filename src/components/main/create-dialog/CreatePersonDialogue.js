import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

import './CreatePersonDialogue.css'
import peopleData from "../../../data/peopleData";

class CreatePersonDialogue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            address: "",
            email: "",
            formErrors: {
                name: "",
                address: "",
                email: ""
            }
        };
        this.handleClose = this.close.bind(this);
        this.handleChangeField = this.changeField.bind(this);
    }

    changeField(event){
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    close() {
        this.setState({open: false});
        peopleData.push(this.state)
    };

    render() {
        return (
            <div>
                <Button type="submit" variant="contained" color="primary" className={"createButton"}
                        onClick={this.handleClickOpen}>
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
                            onChange={this.handleChangeField}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Full name"
                            type="text"
                            fullWidth
                            value={this.state.name}
                        />
                        <TextField
                            onChange={this.handleChangeField}
                            margin="dense"
                            id="address"
                            label="Address"
                            type="text"
                            fullWidth
                            value={this.state.address}
                        />
                        <TextField
                            onChange={this.handleChangeField}
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={this.state.email}
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