import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { NgForm } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { MatSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {
  dataSource = new TicketDataSource(this.ticketService);
  displayedTickets = ['name', 'depto', 'asunto', 'date', 'status', 'actions'];

  constructor(
    private ticketService: TicketService,
    private snackBar: MatSnackBar,
    private dialog: MatDialogModule
  ) {}

  ngOnInit() {
    this.getTickets();
    this.resetDataSource();
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }
  
  resetDataSource() {
    this.getTickets();
    this.dataSource = new TicketDataSource(this.ticketService);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ticketService.selectedTicket = new Ticket();
    }
  }

  addTicket(form: NgForm) {
    if (form.value._id) {
      this.ticketService.putTicket(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.snackBarMessage('Ticket Actualizado');
          this.resetDataSource();
        });
    } else {
      this.ticketService.postTickets(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.snackBarMessage('Ticket Guardado');
          this.resetDataSource();
        });
    }
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(res => {
      this.ticketService.tickets = res as Ticket[];
    });
  }

  editTickets(ticket: Ticket) {
    this.ticketService.selectedTicket = ticket;
  }

  deleteTickets(_id: string) {
    if (confirm('Seguro que desea eliminarlo?')) {
      this.ticketService.deleteTicket(_id).subscribe(res => {
        this.snackBarMessage('Ticket Eliminado');
        this.resetDataSource();
      });
    }
  }
}

export class TicketDataSource extends DataSource<any> {
  constructor(private ticket: TicketService) {
    super();
  }

  connect(): Observable<Ticket[]> {
    return this.ticket.getTickets();
  }

  disconnect() {}

}
