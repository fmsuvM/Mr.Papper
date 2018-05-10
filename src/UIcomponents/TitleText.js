import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper:UI:TitleText');

const TitleText = styled.h2`
    color: ${props => (props.color ? props.color : 'palevioletred')};
    font-size: ${props => props.size}px;
`;

export default TitleText;
