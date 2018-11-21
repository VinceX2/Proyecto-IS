const ticketCtrl = {};
const TicketModel = require('../models/tickets');

ticketCtrl.getTickets = async(req, res) => {
    const getTickets = await TicketModel.find();
    res.json(getTickets);
}

ticketCtrl.createTicket = async(req, res) => {
    const createTicket = new TicketModel({
        name: req.body.name,
        depto: req.body.depto,
        asunto: req.body.asunto,
        message: req.body.message,
        status: req.body.status
    });
    await createTicket.save();
    res.json({
        "status": "Ticket Saved"
    });
};

ticketCtrl.getTicket = async(req, res) => {
    const getTicket = await TicketModel.findById(req.params.id);
    res.json(getTicket);
};

ticketCtrl.editTicket = async(req, res) => {
    const { id } = req.params;
    const newticket = {
        name: req.body.name,
        depto: req.body.depto,
        asunto: req.body.asunto,
        message: req.body.message,
        date: new Date(),
        status: 'Por atender'
    };
    await TicketModel.findByIdAndUpdate(id, { $set: newticket }, { new: true });
    res.json({
        "status": "Ticket Update"
    });

}

ticketCtrl.deleteTicket = async(req, res) => {
    await TicketModel.findByIdAndDelete(req.params.id);
    res.json({
        "status": "Ticket Deleted"
    });
};
module.exports = ticketCtrl;