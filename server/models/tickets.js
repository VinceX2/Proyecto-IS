const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    name: { type: String, required: true },
    depto: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);