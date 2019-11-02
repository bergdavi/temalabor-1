import React, {Component} from 'react'
import {Col} from 'reactstrap'
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label
} from "reactstrap";
import {ticketService} from './_services/ticket.service'
import TicketCard from './components/TicketCard'
import {authenticationService} from "./_services/authentication.service";
import {Role} from "./_helpers/role";

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAdmin: false,
            tickets: [],
            modal: false,
            setModal: false,
            type: '',
            validFor: '',
            validTimeUnit: '',
            price: '',
            line: ''
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

    async componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.type === Role.Admin
        }));

        try {
            const {data} = await window.axios.get('api/tickets');
            this.setState({
                tickets: data
            })
        } catch (e) {
            console.log(e.message)
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        ticketService.addNewTicket(this.state.type, this.state.validFor, this.state.validTimeUnit, this.state.price, this.state.line);
    }

    render() {
        const {type, validFor, validTimeUnit, price, line} = this.state;
        let ticketCards = this.state.tickets.map(ticketIter => {
            return (
                <Col sm="4">
                    <TicketCard ticket={ticketIter}/>
                </Col>
            )
        })
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1 className="title"> Jegyek </h1>
                       {this.state.isAdmin &&
                            <Button onClick={this.toggle} color="secondary">Új hozzáadása</Button>
                        }
                        <Table>
                            <thead>
                            <tr>
                                <th>Típus</th>
                                <th>Érvényes</th>
                                <th>Viszonylat</th>
                                <th>Viszonylat típus</th>
                                <th>Ár</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tickets && this.state.tickets.length !== 0 ? this.state.tickets.map(ticket =>
                                    <tr key={ticket.typeId}>
                                        <td>{ticket.type}</td>
                                        <td>{ticket.validFor}{ticket.validTimeUnit}</td>
                                        <td>{ticket.line.name}</td>
                                        <td>{ticket.line.type}</td>
                                        <td>{ticket.price}</td>
                                    </tr>)
                                : null}
                            </tbody>
                        </Table>

                        {ticketCards}

                        {/*new ticket modal*/}
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className="Új jegy hozzáadása">
                            <ModalHeader toggle={this.toggle}>Új jegy hozzáadása</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="type">Típus</Label>
                                        <input type="text" id="type" name="type" value={type}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="type">Érvényesség</Label>
                                        <input type="text" id="validFor" name="validFor" value={validFor}
                                               onChange={this.handleChange}/>
                                        <Label for="type">Érvényesség típus</Label>
                                        <input type="text" id="validTimeUnit" name="validTimeUnit" value={validTimeUnit}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="type">Ár</Label>
                                        <input type="text" id="price" name="price" value={price}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="type">Viszonylat</Label>
                                        <input type="text" id="line" name="line" value={line}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleSubmit}>Hozzáadás</Button>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tickets;