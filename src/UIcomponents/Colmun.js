import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Column');

const Colmun = styled.ul`
    ${props => {
        return (
            props.white &&
            css`
                color: white;
            `
        );
    }};
`;

export default Colmun;
