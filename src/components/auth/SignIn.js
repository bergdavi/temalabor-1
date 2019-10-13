import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

class SignIn extends Component {
    state = {

    }

    handleChange = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="title">Bejelentkzés</h5>
                <div className="input-field">
                    <label For="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label For="password">Jelszó</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Belépés</button>
                    </div>
                </form>
        </ div>
        )
    }
}

export default SignIn;