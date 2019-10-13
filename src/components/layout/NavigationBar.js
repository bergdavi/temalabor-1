import React from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggler } from 'reactstrap';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../css/navigationbar.css'

export default class NavigationBar extends React.Component {
    render() {
    return (
        
        <Navbar expand="lg">
            <NavbarBrand href="/">BKK e-Jegy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
                <SignedInLinks />
                <SignedOutLinks />
        </Navbar>
    );
  }
}

