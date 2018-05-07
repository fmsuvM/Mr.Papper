import styled, { css } from 'styled-components';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::AppLayout');

const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 85px 1fr;
`;

export default AppLayout;
