import styled from 'styled-components';

const ListWrapper = styled.ul`
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    &:before {
        content: '';
        display: table;
    }
    &:after {
        content: '';
        display: table;
        clear: both;
    }
`;

export default ListWrapper;
