import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  name = 'Vicente';
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getTickets()
    .subscribe(res => {
      this.ticketService.tickets = res as Ticket[];
    });
  }

}
