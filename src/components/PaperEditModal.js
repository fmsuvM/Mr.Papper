import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';
import ReactModal from 'react-modal';

import { closePaperModal, receivePaperInfo } from '../actions/index';
import Button from '../UIcomponents/Button';
import PaperEditForm from './PaperEditForm';

const debug = Debug('Mr.Papper::Components::PaperEditModal');

const modalStyle = {
    content: {
        width: '700px',
        height: '400px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overlfow: 'scroll'
    }
};

class PaperEditModal extends React.Component {
    constructor(props) {
        super(props);

        this.closePaperModal = () => {
            this.props.closePaperModal();
        };
        this.submitPaperStatus = status => {
            status.originname = this.props.targetPaper;
            this.props.submitPaperStatus(status);
        };
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.isShowModal}
                style={modalStyle}
                onRequestClose={this.closePaperModal}
                contentLabel="delete confirmation"
                ariaHideApp={false}
            >
                <h2> Regisering Paper Form</h2>
                <p> paper name is {this.props.targetPaper} </p>
                <PaperEditForm
                    onSubmit={values => this.submitPaperStatus(values)}
                />
                <Button onClick={this.closePaperModal}> close </Button>
            </ReactModal>
        );
    }
}

PaperEditModal.propTypes = {
    isShowModal: PropTypes.bool,
    targetPaper: PropTypes.string,
    closePaperModal: PropTypes.func,
    submitPaperStatus: PropTypes.func
};

const mapStateToProps = state => ({
    isShowModal: state.manager.isShowModal,
    targetPaper: state.manager.targetPaper
});

const mapDispatchToProps = dispatch => ({
    closePaperModal: () => {
        dispatch(closePaperModal());
    },
    submitPaperStatus: status => {
        debug('status: ', status);
        dispatch(receivePaperInfo(status));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaperEditModal);
