import React, {Component} from 'react'
import {authenticationService} from "../../_services/authentication.service";
import {Role} from "../../_helpers/role";
import {Button, Table} from "reactstrap";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt, faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
library.add(faTrashAlt, faUserEdit);

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAdmin: false,
            users: [],
            modal: false,
            setModal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    async componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.type === Role.Admin
        }));

        try {
            const {data} = await window.axios.get('api/users');
            this.setState({
                users: data
            })
        } catch (e) {
            console.log(e.message)
        }
        console.log(this.state.users);
    }

    handleRemove=(us) => {
        window.axios.delete(`api/user/${us.id}`)
            .then(res =>{
                if(res.status === 200){
                    const leftoverUsers = this.state.users.filter(user => {
                        return user !== us;
                    })

                    this.setState({
                        users: [...leftoverUsers]
                    })
                } else {
                    console.log("Hiba a felhasználó törlése közben")
                }
            })

    }

    handleEdit=(us) => {

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title"> Felhasználók </h1>
                        <Button onClick={() => window.location = '/registration'}  color="secondary" >Új hozzáadása</Button>
                        <Table>
                            <thead>
                            <tr>
                                <th>Név</th>
                                <th>email</th>
                                <th>Igazolvány</th>
                                <th>Jogosultság</th>
                                <th>Kezelés</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users && this.state.users.length !== 0 ? this.state.users.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.idCard}</td>
                                        <td>{user.type}</td>
                                        <td>
                                            <ul onClick={() => this.handleRemove(user)}><FontAwesomeIcon
                                            icon="trash-alt"/>
                                            </ul>
                                            <ul onClick={() => this.handleEdit(user)}><FontAwesomeIcon
                                                icon="user-edit"/>
                                            </ul>
                                        </td>
                                    </tr>)
                                : null}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;