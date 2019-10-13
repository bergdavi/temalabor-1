import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import '../../css/navigationbar.css'

const SignedInLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/'>Felhasználók</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/dashboard'>Statisztika</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/'>Jegytípusok</NavLink></NavItem>
        </Nav>
    )
}

export default SignedInLinks;