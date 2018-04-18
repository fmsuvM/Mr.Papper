import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
    requestData: state.requestData
});

const mapDispatchToProps = dispatch => ({
    testFunc: data => {
        debug('data', data);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
