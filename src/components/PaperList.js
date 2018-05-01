import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';
import ReactModal from 'react-modal';

import {
    registPaper,
    closePaperModal,
    receivePaperInfo
} from '../actions/index';
import Button from '../UIcomponents/Button';
import PaperEditForm from './PaperEditForm';

const debug = Debug('Mr.Papper::List::');

const modalStyles = {
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

class PaperList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPaper: false,
            openUnknown: false,
            description: 'enter paper title',
            status: {
                title: null
            }
        };
        this.openPaper = trigger => () => {
            this.setState({
                openPaper: !trigger
            });
        };
        this.openUnknown = trigger => () => {
            this.setState({
                openUnknown: !trigger
            });
        };
        this.registeringPaper = filename => () => {
            this.props.registeringPaper(filename);
        };
        this.closePaperModal = () => {
            this.props.closePaperModal();
        };
        this.submitPaperStatus = status => {
            status.originname = this.props.targetPaper;
            this.props.submitPaperStatus(status);
        };
    }

    render() {
        const paper = this.props.paper;
        const unknown = this.props.unknown;
        let paperList = null;
        if(paper.length === 0) {
            paperList = <p>論文は登録されていません</p>;
        } else {
            paperList = (
                <div>
                    <ul>
                        {paper.map((_paper, key) => {
                            const{ title } = _paper;
                            return <li key={key}>{title}</li>;
                        })}
                    </ul>
                </div>
            );
        }
        let unknownList = null;
        if(unknown.length === 0) {
            unknownList = <p>未分類の論文はありません</p>;
        } else {
            unknownList = (
                <div>
                    <ul>
                        {unknown.map((_unknown, key) => {
                            return (
                                <li key={key}>
                                    {_unknown}{' '}
                                    <p
                                        onClick={this.registeringPaper(
                                            _unknown
                                        )}
                                    >
                                        論文を登録するボタン
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
        return (
            <div>
                <p>論文リスト</p>
                {this.props.isLoading ? (
                    <p>Now Loading...</p>
                ) : (
                    <div>
                        <div>
                            {this.state.openPaper ? (
                                <div>{paperList}</div>
                            ) : null}
                            <Button
                                onClick={this.openPaper(this.state.openPaper)}
                            >
                                論文リストを開く
                            </Button>
                        </div>
                        <div>
                            {this.state.openUnknown ? (
                                <div>{unknownList}</div>
                            ) : null}
                            <Button
                                onClick={this.openUnknown(
                                    this.state.openUnknown
                                )}
                            >
                                未分類リストを開く
                            </Button>
                        </div>
                    </div>
                )}
                {this.props.isShowModal ? (
                    <ReactModal
                        isOpen={this.props.isShowModal}
                        style={modalStyles}
                        onRequestClose={this.closePaperModal}
                        contentLabel="delete confirmation"
                        ariaHideApp={false}
                    >
                        <h2>論文登録開始</h2>
                        <p> paper name is {this.props.targetPaper}</p>
                        <PaperEditForm
                            onSubmit={values => this.submitPaperStatus(values)}
                        />
                        <Button onClick={this.closePaperModal}>close</Button>
                    </ReactModal>
                ) : (
                    <span />
                )}
            </div>
        );
    }
}

PaperList.propTypes = {
    select: PropTypes.func,
    paper: PropTypes.array,
    unknown: PropTypes.array,
    isLoading: PropTypes.bool,
    open: PropTypes.func,
    registeringPaper: PropTypes.func,
    isShowModal: PropTypes.bool,
    targetPaper: PropTypes.string,
    closePaperModal: PropTypes.func,
    submitPaperStatus: PropTypes.func
};

const mapStateToProps = state => ({
    paper: state.manager.paper,
    unknown: state.manager.unknown,
    isLoading: state.manager.isLoading,
    isShowModal: state.manager.isShowModal,
    targetPaper: state.manager.targetPaper
});

const mapDispatchToProps = dispatch => ({
    registeringPaper: filename => {
        dispatch(registPaper(filename));
    },
    closePaperModal: () => {
        dispatch(closePaperModal());
    },
    submitPaperStatus: status => {
        debug('status: ', status);
        dispatch(receivePaperInfo(status));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);
