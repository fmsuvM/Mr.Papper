import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Debug from 'debug';

import { registPaper } from '../actions/index';

import PaperEditModal from './PaperEditModal';
import RegisteredPaper from './RegisteredPaper';
import UnknownPaper from './UnknownPaper';

import Button from '../UIcomponents/Button';
import TitleText from '../UIcomponents/TitleText';
import FadeComponent from '../UIcomponents/FadeComponent';

const debug = Debug('Mr.Papper::List::');

class PaperList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPaper: false,
            openUnknown: false
        };
        this.openPaper = trigger => () => {
            this.setState({
                openPaper: !trigger
            });
        };
        this.openUnknown = trigger => () => {
            this.setState({
                openUnknown: !trigger
            });
        };
        this.registeringPaper = filename => () => {
            this.props.registeringPaper(filename);
        };
    }

    render() {
        return (
            <div>
                <TitleText size="30" color="#222">
                    Paper List
                </TitleText>
                {this.props.isLoading ? (
                    <p> Now Loading... </p>
                ) : (
                    <div>
                        <div>
                            <Button
                                onClick={this.openPaper(this.state.openPaper)}
                            >
                                論文リストを開く
                            </Button>
                            {this.state.openPaper ? (
                                <FadeComponent out={!this.state.openPaper}>
                                    <RegisteredPaper paper={this.props.paper} />
                                </FadeComponent>
                            ) : (
                                <span />
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={this.openUnknown(
                                    this.state.openUnknown
                                )}
                            >
                                未分類リストを開く
                            </Button>
                            {this.state.openUnknown ? (
                                <FadeComponent out={!this.props.unknown}>
                                    <UnknownPaper
                                        unknown={this.props.unknown}
                                        onRegist={this.registeringPaper}
                                    />
                                </FadeComponent>
                            ) : (
                                <span />
                            )}
                        </div>
                    </div>
                )}
                {this.props.isShowModal ? <PaperEditModal /> : <span />}
            </div>
        );
    }
}

PaperList.propTypes = {
    select: PropTypes.func,
    paper: PropTypes.array,
    unknown: PropTypes.array,
    isLoading: PropTypes.bool,
    open: PropTypes.func,
    registeringPaper: PropTypes.func,
    isShowModal: PropTypes.bool,
    targetPaper: PropTypes.string
};

const mapStateToProps = state => ({
    paper: state.manager.paper,
    unknown: state.manager.unknown,
    isLoading: state.manager.isLoading,
    isShowModal: state.manager.isShowModal,
    targetPaper: state.manager.targetPaper
});

const mapDispatchToProps = dispatch => ({
    registeringPaper: filename => {
        dispatch(registPaper(filename));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);
