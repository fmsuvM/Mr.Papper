import React, { Component } from 'react';
import { connect } from 'react-redux';
import Debug from 'debug';

import Button from '../UIcomponents/Button';

const debug = Debug('Mr.Papper::Component::Home');

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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

export default connect(mapStateToProps, null)(Home);
