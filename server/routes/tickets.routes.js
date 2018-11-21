const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket.controller');

router.get('/', ticketCtrl.getTickets);

router.post('/', ticketCtrl.createTicket);

router.get('/:id', ticketCtrl.getTicket);

router.put('/:id', ticketCtrl.editTicket);

router.delete('/:id', ticketCtrl.deleteTicket);

module.exports = router;