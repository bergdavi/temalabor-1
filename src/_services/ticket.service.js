export const ticketService = {
    addNewTicket
};

function addNewTicket(name, validFor, validTimeUnit, price, line) {
    window.axios.post('/api/ticket', {
            name: name,
            validFor: validFor,
            validTimeUnit: validTimeUnit,
            price: price,
            line: line
        }
    );
}
