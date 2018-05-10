import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

import ListWrapper from '../UIcomponents/ListWrapper';
import ListColmun from '../UIcomponents/ListColmun';

const debug = Debug('Mr.Papper:components:RegisteredPaper');

const RegisteredPaper = props => {
    const{ paper } = props;
    if(paper.length === 0) {
        return <p>登録されている論文はありません</p>;
    }
    return (
        <ListWrapper>
            {paper.map((_paper, key) => {
                const{ title } = _paper;
                return <ListColmun key={key}> {title} </ListColmun>;
            })}
        </ListWrapper>
    );
};

RegisteredPaper.propTypes = {
    paper: PropTypes.array
};

export default RegisteredPaper;
