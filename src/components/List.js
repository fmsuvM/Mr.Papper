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
            open: false
        };
        this.open = trigger => () => {
            this.setState({
                open: !trigger
            });
        };
    }

    render() {
        const papers = this.props.papers;
        debug('papers: ', papers);
        let categorizedPage = null;
        categorizedPage = (
            <div>
                <ul>
                    {papers.map((paper, key) => {
                        return <li key={key}>{paper}</li>;
                    })}
                </ul>
            </div>
        );
        return (
            <div>
                <p>リストを表示</p>
                {this.props.isLoading ? (
                    <p>Now Loading...</p>
                ) : (
                    <div>
                        {this.state.open ? <div>{categorizedPage}</div> : null}
                        <Button onClick={this.open(this.state.open)}>
                            開く
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

List.propTypes = {
    select: PropTypes.func,
    papers: PropTypes.array,
    isLoading: PropTypes.bool,
    open: PropTypes.func
};

const mapStateToProps = state => ({
    papers: state.papers,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    select: () => {
        debug('select directory');
        electron.remote.dialog.showOpenDialog(dialogOptions, res => {
            debug('response', res);
            dispatch(selectData(res));
        });
    },
    open: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
