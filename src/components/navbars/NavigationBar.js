import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../css/navigationbar.css'
import { authenticationService } from '../../_services/authentication.service';
import { Role } from '../../_helpers/role'
import {NavLink as RRNavLink} from "react-router-dom";
import Login from "../auth/SignIn";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            currentUser: null,
            isAdmin: false
        };

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.data.type === Role.Admin
        }));
    }

    componentDidUpdate(){
        this.render();
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
                    <SignedOutLinks />

               {/* <SignedInLinks />*/}
                    }
                </div>
            </Collapse>
        </Navbar>

    );
  }
}

