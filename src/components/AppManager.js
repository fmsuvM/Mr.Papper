import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

import HeaderMenu from './HeaderMenu';
import Footer from './Footer';

const debug = Debug('Mr.Papper::AppManager::');

export default class AppManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

AppManager.propTypes = {
    children: PropTypes.element
};
