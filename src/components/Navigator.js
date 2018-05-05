import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Debug from 'debug';

import NavLayout from '../UIcomponents/NavLayout';
import NavItem from '../UIcomponents/NavItem';

const debug = Debug('Mr.Papper::HeaderMenu::');
class Navigator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <NavLayout>
                    <NavItem to="/list" exact activeClassName="active">
                        paper list
                    </NavItem>
                    <NavItem to="/dnd" activeClassName="active">
                        import
                    </NavItem>
                    <NavItem to="/" exact activeClassName="active">
                        home
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
