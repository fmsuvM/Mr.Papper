import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Navigator');

const NavLayout = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    flex: 1;
    z-index: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: auto;
    width: 160px;
    background: palevioletred;
    overflow-y: auto;
    ${props => {}};
`;

export default NavLayout;
