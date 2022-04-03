import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default class EditDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isRandom: true,
            amount: 5,
        }
    }

    render() {
        return (
            <div>
                <form>
                    <TextField fullWidth
                        className="mb-3 mt-2"
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel id="demo-simple-select-label">Is random</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.isRandom}
                            label="Is random"
                            onChange={this.handleRandomChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <div className="buttons d-flex justify-content-end gap-2">
                    <button className="btn btn-secondary" onClick={this.handleClose}>Cancel</button>
                    <button className="btn btn-primary" onClick={this.handleEdit}>Edit</button>
                </div>
            </div>
        );
    }

    handleAmountChange = (val) => {
        this.setState({ amount: val.target.value });
      };

    handleRandomChange = (val) => {
        this.setState({ isRandom: val.target.value });
    }
    
    handleEdit = () => {
        this.props.edit({
            amount: parseInt(this.state.amount),
            isRandom: this.state.isRandom
        });
    }

    handleClose = () => {
        this.props.cancel();
    }
}