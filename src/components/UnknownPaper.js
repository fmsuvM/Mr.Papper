import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

const debug = Debug('Mr.Papper:Components:UnknownPaper');

const UnknownPaper = props => {
    const{ unknown, onRegist } = props;
    debug('props: ', props);
    if(unknown.length === 0) {
        return <p>未登録の論文はありません</p>;
    }
    return (
        <div>
            <ul>
                {unknown.map((_unknown, key) => {
                    return (
                        <li key={key}>
                            {_unknown}
                            <p onClick={onRegist(_unknown)}>
                                論文を登録するボタン
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

UnknownPaper.propTypes = {
    unknown: PropTypes.array,
    onRegist: PropTypes.func
};

export default UnknownPaper;
