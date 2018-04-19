import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';
const{ dialog, remote } = window.require('electron');

import { selectDirectory } from '../actions/index';
import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::List::');

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>リストを表示</p>
                <Button onClick={this.props.select}>フォルダ選択ボタン</Button>
            </div>
        );
    }
}

List.propTypes = {
    select: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    select: () => {
        debug('select directory');
        dispatch(selectDirectory());
    }
});

export default connect(null, mapDispatchToProps)(List);
