import React from 'react';
import {Nav, NavLink, NavItem} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import Login from '../auth/SignIn';

const SignedOutLinks = () => {
    return (
            <Nav className="ml-auto navbar-collapse" navbar>
                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/'>Főoldal</NavLink></NavItem>
                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact to='/faq'>GYIK</NavLink></NavItem>
                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                  to='/contact'>Kapcsolat</NavLink></NavItem>
                <Login/>
            </Nav>
    )
}

export default SignedOutLinks;