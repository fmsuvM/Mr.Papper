import React from 'react';
import Debug from 'debug';

const debug = Debug('Mr.Papper::Footer::');

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr />
                <p>Footer</p>
            </div>
        );
    }
}
