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
    }

    render() {
        return (
            <div>
                <p>リストを表示</p>
                {this.props.isLoading ? (
                    <p>loading ...</p>
                ) : (
                    <p>{this.props.papers[0]}</p>
                )}
                <Button onClick={this.props.select}>フォルダ選択ボタン</Button>
            </div>
        );
    }
}

List.propTypes = {
    select: PropTypes.func,
    papers: PropTypes.array,
    isLoading: PropTypes.bool
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
