export const ticketService = {
    addNewTicket
};

function addNewTicket(type, validFor, validTimeUnit, price, line) {
    window.axios.post('/api/ticket', {
            type: type,
            validFor: validFor,
            validTimeUnit: validTimeUnit,
            price: price,
            line: line
        }
        );
}