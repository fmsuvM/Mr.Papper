import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::Component::Home');

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debug('yeah');
        return (
            <div>
                <Button>Normal Button</Button>
                <Button primary> Primary Button</Button>
            </div>
        );
    }
}

Home.propTypes = {};

const mapStateToProps = state => ({
    requestData: state.requestData
});

const mapDispatchToProps = dispatch => ({
    testFunc: data => {
        debug('data', data);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
