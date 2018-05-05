import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Navigator');

const NavLayout = styled.div`
    width: 55%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: palevioletred;

    ${props => {}};
`;

export default NavLayout;
