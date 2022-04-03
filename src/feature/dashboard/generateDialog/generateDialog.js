import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default class GenerateDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            withImage: true,
            amount: 100,
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
                        <InputLabel id="demo-simple-select-label">With image</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.withImage}
                            label="With image"
                            onChange={this.handleImageChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <div className="buttons d-flex justify-content-end gap-2">
                    <button className="btn btn-secondary" onClick={this.handleClose}>Cancel</button>
                    <button className="btn btn-primary" onClick={this.handleGenerate}>Generate</button>
                </div>
            </div>
        );
    }

    handleAmountChange = (val) => {
        this.setState({ amount: val.target.value });
      };

    handleImageChange = (val) => {
        this.setState({ withImage: val.target.value });
    }

    handleGenerate = () => {
        this.props.generate({
            amount: parseInt(this.state.amount),
            withImage: this.state.withImage
        });
    }

    handleClose = () => {
        this.props.cancel();
    }
}