import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Debug from 'debug';

const debug = Debug('Mr.Papper::UI::Navigator');

const NavItem = styled(NavLink)`
    color: white;
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 30px;
    margin-right: 25px;
    margin-left: 25px;

    text-decoration: none;

    &:hover {
        color: blue;
    }
`;

export default NavItem;
