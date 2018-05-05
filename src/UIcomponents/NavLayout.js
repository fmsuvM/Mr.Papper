import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Navigator');

const NavLayout = styled.div`
    width: 85%;
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;

    ${props => {}};
`;

export default NavLayout;
