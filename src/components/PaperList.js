import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';

import { registPaper } from '../actions/index';
import Button from '../UIcomponents/Button';
import PaperEditModal from './PaperEditModal';

const debug = Debug('Mr.Papper::List::');

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
    }

    render() {
        const paper = this.props.paper;
        const unknown = this.props.unknown;
        let paperList = null;
        if(paper.length === 0) {
            paperList = <p> 論文は登録されていません </p>;
        } else {
            paperList = (
                <div>
                    <ul>
                        {paper.map((_paper, key) => {
                            const{ title } = _paper;
                            return <li key={key}> {title} </li>;
                        })}
                    </ul>
                </div>
            );
        }
        let unknownList = null;
        if(unknown.length === 0) {
            unknownList = <p> 未分類の論文はありません </p>;
        } else {
            unknownList = (
                <div>
                    <ul>
                        {unknown.map((_unknown, key) => {
                            return (
                                <li key={key}>
                                    {_unknown}
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
                <p> 論文リスト </p>
                {this.props.isLoading ? (
                    <p> Now Loading... </p>
                ) : (
                    <div>
                        <div>
                            {this.state.openPaper ? (
                                <div> {paperList} </div>
                            ) : null}
                            <Button
                                onClick={this.openPaper(this.state.openPaper)}
                            >
                                論文リストを開く
                            </Button>
                        </div>
                        <div>
                            {this.state.openUnknown ? (
                                <div> {unknownList} </div>
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
                {this.props.isShowModal ? <PaperEditModal /> : <span />}
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
    targetPaper: PropTypes.string
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);
