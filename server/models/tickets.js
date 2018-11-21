const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    name: { type: String, required: true },
    depto: { type: String, required: true },
    asunto: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    status: { type: String, default: 'Por atender', required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);