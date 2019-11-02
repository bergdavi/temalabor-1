import React, {Component} from 'react';
import {Table} from 'reactstrap';

class Vehicles extends Component {
    constructor() {
        super();
        this.state = {
            vehicles: []
        };
    }

    async componentDidMount() {
        try {
            const {data} = await window.axios.get('api/vehicles');
            this.setState({
                vehicles: data
            })
        } catch (e) {
            console.log(e.message)
        }
        console.log(this.state.vehicles);
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title"> Járművek </h1>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Rendszám</th>
                                    <th>Járat</th>
                                    <th>Viszonylat</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.vehicles && this.state.vehicles.length !== 0 ? this.state.vehicles.map(vehicle =>
                                    <tr key={vehicle.id}>
                                        <td>{vehicle.licencePlate}</td>
                                        <td>{vehicle.line.name}</td>
                                        <td>{vehicle.type}</td>
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

export default Vehicles;