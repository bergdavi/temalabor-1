import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
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
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
    return (
        
        <Navbar color="light" expand="md">
            <NavbarBrand href="/">BKK e-Jegy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <SignedInLinks />
                <SignedOutLinks />
            </Collapse>
        </Navbar>
    );
  }
}

