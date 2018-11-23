import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  
  userLoggedIn: string;
  
  constructor(
    private ticketService: TicketService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getTickets();
    this.userLoggedIn = this.userService.getNameUserLoggedIn();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(res => {
      this.ticketService.tickets = res as Ticket[];
    });
  }

  

}
