import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

class TicketCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.ticket.type);
        return (
            <div>
                <Card body inverse color="info">
                        <CardTitle>{this.props.ticket.type}</CardTitle>
                        <CardText>
                            Érvényesség: {this.props.ticket.validFor} {this.props.ticket.validTimeUnit}
                        </CardText>
                        <CardText>
                            Ár: {this.props.ticket.price}
                        </CardText>
                </Card>
            </div>
        );
    }
}

export default TicketCard;