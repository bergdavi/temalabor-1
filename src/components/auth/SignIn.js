import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import '../../css/signin.css'

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
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SignIn;