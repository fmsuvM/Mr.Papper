import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Debug from 'debug';

import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::Start::');

class Start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>スタート画面</p>
                <Button>Normal Button</Button>
                <Button hoge>Hoge Button</Button>
                <Button primary={'primary'} onClick={this.props.next}>
                    Primary Button
                </Button>
            </div>
        );
    }
}

Start.propTypes = {
    next: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    next: () => {
        debug('move next page');
        dispatch(push('/home'));
    }
});

export default connect(null, mapDispatchToProps)(Start);
