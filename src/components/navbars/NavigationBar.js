import React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../css/navigationbar.css'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeNavbar() {
        if (this.state.isOpen === true) {
            this.toggle();
        }
    }

    render() {
    return (
        <Navbar color="light" light expand="md" >
            <NavbarBrand href="/">BKK e-Jegy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} onClick={this.closeNavbar} navbar>
                <div className="navbar-wrapper">
                <SignedInLinks />
                <SignedOutLinks />
                </div>
            </Collapse>
        </Navbar>

    );
  }
}

