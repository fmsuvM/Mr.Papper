import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Navigator');

const NavItem = styled(NavLink)`
    color: white;
    display: block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;

    text-decoration: none;

    &:hover {
        color: blue;
    }
`;

export default NavItem;
