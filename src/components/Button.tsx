import * as React from 'react';
import styled, { css } from '../style/theme/index';

interface ButtonProps {
    primary?: boolean;
}

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    border: 2px solid palevioletred;

    color: ${(props: ButtonProps) =>
        props.primary ? 'white' : 'palevioletred'};
    background: ${(props: ButtonProps) =>
        props.primary ? 'palevioletred' : 'transparent'};
`;

export default Button;
