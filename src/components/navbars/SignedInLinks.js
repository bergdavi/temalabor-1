import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../../css/navigationbar.css'

const SignedInLinks = () => {
    /*if(!localStorage.getItem('id')){
        return null;
    }else*/
        return (
        <Nav className="ml-auto navbar-collapse" navbar>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/users'>Felhasználók</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/dashboard'>Statisztika</NavLink></NavItem>
            <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/tickets'>Jegytípusok</NavLink></NavItem>
        </Nav>
    )
}

export default SignedInLinks;