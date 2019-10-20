import React, { Component } from 'react'

class Tickets extends Component {

    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title"> Jegyek és bérletek </h1>
                        <ul>
                            <li>Diák bérlet</li>
                            <li>Felnőtt bérlet</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tickets;