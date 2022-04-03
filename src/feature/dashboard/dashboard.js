import React from "react";
import './dashboard.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import GenerateDialog from "./generateDialog/generateDialog";
import EditDialog from "./editDialog/editDialog";
import RemoveDialog from "./removeDialog/removeDialog";
import TestService from "../../shared/services/test.service";
import { connect } from 'react-redux';
import { selectList } from '../../store/actions';
import { editItems, generateTestList, removeFromList } from "./dashboard.service";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

class Dashboard extends React.Component {
    testService = new TestService();
    handleClose = () => this.setState({isOpen: false});

    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          openDialog: '',
        };
    }

    componentDidMount() {
        this.testService.generate();
    }

    render() {
        let { openDialog } = this.state;

        return (
            <main className="col-md col-12">
                <header className="d-flex gap-2">
                    <button className="btn btn-primary" onClick={this.generate}>Generate</button>
                    <button className="btn btn-primary" onClick={this.edit}>Edit</button>
                    <button className="btn btn-primary" onClick={this.remove}>Delete</button>
                </header>

                

                <Modal
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style}}>
                        {(() => {
                            if(openDialog === 'generate') {
                                return <GenerateDialog generate={this.handleGenerate} cancel={this.handleClose} />
                            } else if(openDialog === 'edit') {
                                return <EditDialog edit={this.handleEdit} cancel={this.handleClose} />
                            } else if(openDialog === 'remove') {
                                return <RemoveDialog remove={this.handleRemove} cancel={this.handleClose} />
                            }
                        })()}
                    </Box>
                </Modal>
            </main>
        );
    }

    edit = () => {
        this.setState({isOpen: true, openDialog: 'edit'})
    }

    generate = () => {
        this.setState({isOpen: true, openDialog: 'generate'})
    }

    remove = () => {
        this.setState({isOpen: true, openDialog: 'remove'})
    }

    handleGenerate = (data) => {
        this.props.selectList([...generateTestList(data.amount, data.withImage)]);
        this.handleClose();
    }

    handleEdit = (data) => {
        this.props.selectList([...editItems(this.props.list, data.amount, data.isRandom)]);
        this.handleClose();
    }


    handleRemove = (data) => {
        this.props.selectList([...removeFromList(this.props.list, data.amount, data.isRandom)]);
        this.handleClose();
    }
}

const mapStateToProps = (state) => {
    return { list: state.list };
}

export default connect(mapStateToProps, {
    selectList
})(Dashboard);