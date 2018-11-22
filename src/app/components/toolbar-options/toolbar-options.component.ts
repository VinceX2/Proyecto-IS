import { Component, OnInit} from '@angular/core';
import { MatDialog} from '@angular/material';
import { FormCrearTicketComponent } from '../form-crear-ticket/form-crear-ticket.component';


@Component({
  selector: 'app-toolbar-options',
  templateUrl: './toolbar-options.component.html',
  styleUrls: ['./toolbar-options.component.css']
})
export class ToolbarOptionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCrearTicketComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}




