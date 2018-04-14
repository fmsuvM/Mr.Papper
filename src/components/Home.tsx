import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators, Action } from 'redux';
import * as Debug from 'debug';

import { RootState } from '../models/model';
import { testTrigger } from '../actions/index';
import Button from './Button';

const debug = Debug('Mr.Papper::Component::Home');

interface HomeProps {
    hoge?: string;
    test?: () => any;
}

class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <Button primary={false}>Normal Button</Button>
                <Button primary={true}> Primary Button</Button>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    requestData: state.requestData
});

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
//     test: () => {
//         dispatch(testTrigger);
//     }
// });

export default connect(mapStateToProps, null)(Home);
