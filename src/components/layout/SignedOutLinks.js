import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/'>GYIK</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/'>Árak</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/signin'>Belépés</NavLink></NavItem>
        </Nav>
    )
}

export default SignedOutLinks;