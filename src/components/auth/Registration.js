import React, {Component} from 'react';
import {Button} from 'reactstrap';

class Registration extends Component {
    state = {
        name: '',
        email: '',
        idCard: '',
        password: '',
        type: 'user'
    };

    OnChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    OnSubmit = () => {
        window.axios.post('/api/auth/register', {
            name: this.state.name,
            email: this.state.email,
            idCard: this.state.idCard,
            password: this.state.password,
            type: this.state.type
        }, {withCredentials: true})
            .then(res => {
                if(res.status === 200){
                    window.location = "/siker";
                }
            })
            .catch(res => {
                console.log("hiba");
            })
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title"> Regisztráció </h1>
                        <div className="input-field">
                            <label htmlFor="name">Név</label>
                            <input type="text" id="name" name="name" onChange={e => this.OnChange(e)}
                                   value={this.state.name}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="idCard">Azonosító száma</label>
                            <input type="text" id="idcard" name="idCard" onChange={e => this.OnChange(e)}
                                   value={this.state.idCard}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={this.state.email}
                                   onChange={e => this.OnChange(e)}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Jelszó</label>
                            <input type="password" id="password" name="password" value={this.state.password}
                                   onChange={e => this.OnChange(e)}/>
                        </div>
                        <Button onClick={() => this.OnSubmit()} type="primary">Regisztrálás</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Registration;