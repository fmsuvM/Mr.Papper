import { connect } from 'react-redux';

import { RootState } from '../models/model';
import { testTrigger } from '../actions/index';
import { Home } from '../components/Home';

const mapStateToProps = (state: RootState) => ({
    hoge: 'hogehoge'
});

export const ConnectedHome = connect(mapStateToProps, {
    test: testTrigger
})(Home);
