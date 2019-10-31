import React, {Component} from 'react'
import { authenticationService } from './_services/authentication.service';
import {userService} from "./_services/user.service";

class Home extends Component {
/*    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }*/

    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title">Köszöntjük oldalunkon!</h1>
                        <p>Lorem ipsim</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;