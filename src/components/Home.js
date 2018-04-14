import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';
import styled, { css } from 'styled-components';

const debug = Debug('Mr.Papper::Component::Home');

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;

    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `};
`;

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

Home.PropTypes = {};

const mapStateToProps = state => ({
    requestData: state.requestData
});

const mapDispatchToProps = dispatch => ({
    testFunc: data => {
        debug('data', data);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
