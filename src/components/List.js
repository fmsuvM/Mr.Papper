import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';
const electron = window.require('electron');

import { selectData } from '../actions/index';
import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::List::');

const dialogOptions = {
    properties: ['openFile', 'openDirectory', 'multiSelections']
};

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPaper: false,
            openUnknown: false
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
    }

    render() {
        const paper = this.props.paper;
        const unknown = this.props.unknown;
        debug('props: ', this.props);
        let paperList = null;
        if(paper.length === 0) {
            paperList = <p>論文は登録されていません</p>;
        } else {
            paperList = (
                <div>
                    <ul>
                        {paper.map((_paper, key) => {
                            return <li key={key}>{_paper}</li>;
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
                            return <li key={key}>{_unknown}</li>;
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
            </div>
        );
    }
}

List.propTypes = {
    select: PropTypes.func,
    paper: PropTypes.array,
    unknown: PropTypes.array,
    isLoading: PropTypes.bool,
    open: PropTypes.func
};

const mapStateToProps = state => ({
    paper: state.manager.paper,
    unknown: state.manager.unknown,
    isLoading: state.manager.isLoading
});

const mapDispatchToProps = dispatch => ({
    select: () => {
        debug('select directory');
        electron.remote.dialog.showOpenDialog(dialogOptions, res => {
            debug('response', res);
            dispatch(selectData(res));
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
