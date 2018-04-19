import React from 'react';
import { connect } from 'react-redux';
import Debug from 'debug';

const debug = Debug('Mr.Papper::List::');

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>リストを表示</div>;
    }
}

export default connect(null, null)(List);
