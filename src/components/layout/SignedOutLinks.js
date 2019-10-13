import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink tag={RRNavLink} to='/'>GYIK</NavLink></NavItem>
            <NavItem><NavLink tag={RRNavLink} to='/'>Árak</NavLink></NavItem>
            <NavItem><NavLink tag={RRNavLink} to='/signin'>Belépés</NavLink></NavItem>
        </Nav>
    )
}

export default SignedOutLinks;