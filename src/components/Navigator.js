import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Debug from 'debug';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';

import NavLayout from '../UIcomponents/NavLayout';
import NavItem from '../UIcomponents/NavItem';

const debug = Debug('Mr.Papper::HeaderMenu::');
fontawesome.library.add(faFileAlt, faBook, faUserCircle, faDownload);
class Navigator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <NavLayout>
                    <NavItem to="/list" exact activeClassName="active">
                        <FontAwesomeIcon icon="book" size="2x" />
                    </NavItem>
                    <NavItem to="/dnd" activeClassName="active">
                        <FontAwesomeIcon icon="download" size="2x" />
                    </NavItem>
                    <NavItem to="/" exact activeClassName="active">
                        <FontAwesomeIcon icon="user-circle" size="2x" />
                    </NavItem>
                </NavLayout>
            </nav>
        );
    }
}

Navigator.propTypes = {
    jump: PropTypes.func
};

const mapStateToProps = state => ({
    requestData: state.manager.requestData
});

const mapDispatchToProps = dispatch => ({
    jump: mode => {
        debug('jump mde: ', mode);
        dispatch(push(`/${mode}`));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
