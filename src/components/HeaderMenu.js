import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Debug from 'debug';

const debug = Debug('Mr.Papper::HeaderMenu::');

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div>
                    <Link to="/list">
                        <p>src list</p>
                    </Link>
                    <Link to="/dnd">
                        <p>impot</p>
                    </Link>
                    <Link to="/">
                        <p>home</p>
                    </Link>
                </div>
                <hr />
            </nav>
        );
    }
}

HeaderMenu.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
