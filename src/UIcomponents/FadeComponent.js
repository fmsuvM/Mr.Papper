import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

const FadeComponent = styled.div`
    visibility: ${props => (props.out ? 'hidden' : 'visible')};
    animation: ${props => (props.out ? fadeOut : fadeIn)} 1s linear;
    transition: visibility 1s linear;
`;

export default FadeComponent;
