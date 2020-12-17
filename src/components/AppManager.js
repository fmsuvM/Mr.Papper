import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

import AppLayout from '../UIcomponents/AppLayout';
import ChildrenPage from '../UIcomponents/ChildrenPage';
import Navigator from './Navigator';

const debug = Debug('Mr.Papper::AppManager::');

export default class AppManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppLayout>
                <Navigator />
                <ChildrenPage>{this.props.children}</ChildrenPage>
            </AppLayout>
        );
    }
}

AppManager.propTypes = {
    children: PropTypes.element
};
