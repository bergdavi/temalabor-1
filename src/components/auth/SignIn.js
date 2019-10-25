import React, {Component, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, NavLink} from 'reactstrap';
import '../../css/signin.css'
import {NavLink as RRNavLink, Redirect} from "react-router-dom";
import { useAuth } from "../../context/auth";

function SignIn() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const {setAuthTokens} = useAuth();

    let state = {
        modal: false,
        setModal: false,
        email: "",
        password: ""
    };

    toggle = toggle.bind(this);

    handleChange = handleChange.bind(this);
    handleSubmit = handleSubmit.bind(this);


function toggle() {
    this.setState({
        modal: ! this.state.modal
    });
}


function handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
}


    function handleSubmit() {
        window.axios.post('/api/auth/login',  {email: this.state.email, password: this.state.password},
            {withCredentials: true})
            .then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }


    return (
        <div>
            <Button color="primary" onClick={toggle}>Bejelentkezés</Button>
            <Modal isOpen={state.modal} toggle={toggle} className="asd">
                <ModalHeader toggle={toggle}>Bejelentkezés</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit} className="white">
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={state.email} onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Jelszó</label>
                            <input type="password" id="password" name="password" value={state.password}
                                   onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <Button className="btn-own">Belépés</Button>
                        </div>
                        <NavLink  tag={RRNavLink} exact to='/registration' onClick={toggle}>Még nincs fiókja? Regisztráljon itt!</NavLink>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

/*class SignIn extends Component {
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
        window.axios.post('/api/auth/login',  {email: this.state.email, password: this.state.password},
            {withCredentials: true})
            .then(
                response => {
                    if (response.status === 200) {
                        localStorage.setItem('id', response.data.id);
                        localStorage.setItem('idcard', response.data.idCard);
                        localStorage.setItem('type', response.data.type);
                        window.location = "/siker";
                    } else {
                        console.log(response.status);
                    }
                },
                error => {console.log("hiba");}
            )
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
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" value={email} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Jelszó</label>
                                <input type="password" id="password" name="password" value={password}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <Button className="btn-own">Belépés</Button>
                            </div>
                            <NavLink  tag={RRNavLink} exact to='/registration' onClick={this.toggle}>Még nincs fiókja? Regisztráljon itt!</NavLink>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}*/

export default SignIn;