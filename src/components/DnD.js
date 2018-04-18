import React from 'react';
import Debug from 'debug';

const debug = Debug('Mr.Papper::DnD::');

export default class DnD extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>ドラッグアンドドロップ</div>;
    }
}
