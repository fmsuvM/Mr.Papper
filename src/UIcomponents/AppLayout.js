import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::AppLayout');

const AppLayout = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export default AppLayout;
