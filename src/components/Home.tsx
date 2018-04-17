import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Action } from 'redux';
import * as Debug from 'debug';

import { RootState } from '../models/model';
import { testTrigger } from '../actions/index';
import Button from './Button';

const debug = Debug('Mr.Papper::Component::Home');

interface HomeProps {
    hoge: string;
    test: () => any;
}

export const Home: React.SFC<HomeProps> = props => {
    const { hoge, test } = props;
    const handleTest = () => {
        debug('handle test is successed');
        test();
    };

    return (
        <div>
            <Button primary={false}>Normal Button {hoge}</Button>
            <Button primary={true} onClick={handleTest}>
                {`Primary Button`}
            </Button>
        </div>
    );
};
