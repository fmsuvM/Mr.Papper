import React from 'react';
import { connect } from 'react-redux';
import Debug from 'debug';

const debug = Debug('Mr.Papper::DnD::');

class DnD extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>ドラッグアンドドロップ</div>;
    }
}

export default connect(null, null)(DnD);
