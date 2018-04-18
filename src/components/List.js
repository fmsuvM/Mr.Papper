import React from 'react';
import Debug from 'debug';

const debug = Debug('Mr.Papper::List::');

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>リストを表示</div>;
    }
}
