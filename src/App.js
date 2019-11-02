import React, {Component} from 'react';
import {
    Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './css/app.css'
import {BrowserRouter, Switch, Route, NavLink as RRNavLink} from 'react-router-dom';
import Home from './Home'
import Dashboard from './components/dashboard/Dashboard';
import NoMatchPage from './NoMatchPage';
import SignIn from './components/auth/SignIn';
import Footer from './components/Footer';
import Tickets from './Tickets';
import FAQ from './FAQ';
import Contact from './Contact';
import Registration from './components/auth/Registration'
import Siker from './tmp/Siker';
import Users from './components/dashboard/Users';
import {history} from './_helpers/history';
import {Role} from './_helpers/role';
import {PrivateRoute} from "./components/auth/PrivateRoute";
import {authenticationService} from './_services/authentication.service';
import {Button} from "reactstrap";
import './css/navigationbar.css'
import Vehicles from "./components/vehicles/Vehicles";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false,
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.type === Role.Admin
        }));
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

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        return (
            <BrowserRouter history={history}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">BKK e-Jegy</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} onClick={this.closeNavbar} navbar>
                        <div className="navbar-wrapper">
                            <Nav className="ml-auto navbar-collapse" navbar>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/'>Főoldal</NavLink></NavItem>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/tickets'>Jegyek</NavLink></NavItem>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/faq'>GYIK</NavLink></NavItem>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/contact'>Kapcsolat</NavLink></NavItem>
                                {!this.state.currentUser && <SignIn/>}
                            </Nav>
                            {this.state.isAdmin &&
                            <Nav className="ml-auto navbar-collapse" navbar>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/users'>Felhasználók</NavLink></NavItem>
                                <NavItem><NavLink activeClassName="selected" tag={RRNavLink} exact
                                                  to='/dashboard'>Statisztika</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Járművek
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink tag={RRNavLink} exact to='/vehicles'>Listázás</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            }
                            {this.state.currentUser &&
                            <Nav className="ml-auto navbar-collapse" navbar>
                                <Button color="primary" onClick={this.logout}>Kijelentkezés</Button>
                            </Nav>
                            }
                        </div>
                    </Collapse>
                </Navbar>

                < Container>
                    < Switch>
                        < Route path='/' exact component={Home}/>
                        <PrivateRoute path='/dashboard' roles={[Role.Admin]} exact component={Dashboard}/>
                        <Route path='/tickets' exact component={Tickets}/>
                        <Route path='/faq' exact component={FAQ}/>
                        <Route path='/contact' exact component={Contact}/>
                        <Route path='/siker' exact component={Siker}/>
                        <Route path='/registration' exact component={Registration}/>
                        <PrivateRoute path='/vehicles' exact component={Vehicles}/>
                        <PrivateRoute path='/users' exact component={Users}/>
                        <Route component={NoMatchPage}/>
                    </Switch>

                </Container>
                <Footer/>
            </BrowserRouter>

        );
    }
}

export default App;