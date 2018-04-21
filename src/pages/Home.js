import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';

import Button from '../UIcomponents/Button';
import { signinUser, signOutUser } from '../actions/index';
import storageLoader from '../utils/storageLoader';

const debug = Debug('Mr.Papper::Component::Home');

class Home extends Component {
    constructor(props) {
        super(props);
        this.clearUserInfo = () => {
            this.props.clearUserInfo();
        };
        this.signIn = () => {
            this.props.signIn();
        };
    }
    render() {
        return (
            <div>
                <Button onClick={this.signIn}>SIGN IN</Button>
                <Button primary={'primary'} onClick={this.clearUserInfo}>
                    Log Out
                </Button>
            </div>
        );
    }
}

Home.propTypes = {
    clearUserInfo: PropTypes.func,
    signIn: PropTypes.func
};

const mapStateToProps = state => ({
    requestData: state.requestData
});

const mapDispatchToProps = dispatch => ({
    clearUserInfo: () => {
        storageLoader.clearUserInfo();
        dispatch(signOutUser());
        debug('cleared user info: ', localStorage);
    },
    signIn: () => {
        const check = storageLoader.checkUserInfo();
        dispatch(signinUser(check));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
