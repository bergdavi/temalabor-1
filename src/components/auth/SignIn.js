import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, NavLink} from 'reactstrap';
import '../../css/signin.css'
import {NavLink as RRNavLink} from "react-router-dom";
import {authenticationService} from "../../_services/authentication.service";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey);


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            setModal: false,
            email: "",
            password: ""
        };
        this.toggle = this.toggle.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        authenticationService.login(this.state.email, this.state.password);
    }


    render() {
        const {email, password} = this.state;
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Bejelentkezés</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="asd">
                    <ModalHeader toggle={this.toggle}>Bejelentkezés</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit} className="white">
                            <div className="input-field">
                                <label htmlFor="email">
                                    <FontAwesomeIcon
                                        icon="envelope"
                                    />{' '}Email</label>
                                <input type="text" id="email" name="email" value={email} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">
                                    <FontAwesomeIcon
                                        icon="key" size="sm"
                                    />{' '}Jelszó</label>
                                <input type="password" id="password" name="password" value={password}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <Button className="btn-own">Belépés</Button>
                            </div>
                            <NavLink tag={RRNavLink} exact to='/registration' onClick={this.toggle}>Még nincs fiókja?
                                Regisztráljon itt!</NavLink>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SignIn;