import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink  tag={RRNavLink} to='/'>Felhasználók</NavLink></NavItem>
            <NavItem><NavLink tag={RRNavLink} to='/dashboard'>Statisztika</NavLink></NavItem>
            <NavItem><NavLink tag={RRNavLink} to='/'>Jegytípusok</NavLink></NavItem>
        </Nav>
    )
}

export default SignedInLinks;