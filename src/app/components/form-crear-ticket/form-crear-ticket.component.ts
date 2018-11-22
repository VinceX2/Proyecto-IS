import { Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { TicketsComponent, TicketDataSource } from '../tickets/tickets.component';
import { TicketService } from '../../services/ticket.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-crear-ticket',
  templateUrl: './form-crear-ticket.component.html',
  styleUrls: ['./form-crear-ticket.component.css']
})
export class FormCrearTicketComponent implements OnInit {
  user = 'Vicente';
  depto = 'IT';

  constructor(
    public dialogRef: MatDialogRef<FormCrearTicketComponent>,
    private ticketComponent: TicketsComponent,
    public ticketService: TicketService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  snackBarMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }
  onConfirm(form: NgForm) {
    this.dialogRef.close('Saved');
    this.ticketService.postTickets(form.value)
      .subscribe(res => {
        this.snackBarMessage('Ticket Guardado');
      });
  }

  onCancel() {
    this.dialogRef.close('Cancel');
  }
}
