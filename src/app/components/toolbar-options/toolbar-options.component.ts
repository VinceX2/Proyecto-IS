import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormCrearTicketComponent } from '../form-crear-ticket/form-crear-ticket.component';

export interface Food {
  value: string;
  viewValue: string;
}

export interface DialogData {
  asunto: string;
  mensaje: string;
  tipo: string;
}

@Component({
  selector: 'app-toolbar-options',
  templateUrl: './toolbar-options.component.html',
  styleUrls: ['./toolbar-options.component.css']
})
export class ToolbarOptionsComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'En Proeso' },
    { value: 'pizza-1', viewValue: 'Terminado' },
    { value: 'tacos-2', viewValue: 'En espera' }
  ];

  asunto: string;
  mensaje: string;
  tipo: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
     const dialogRef = this.dialog.open(FormCrearTicketComponent, {
      width: '250px',
      
      data: {mensaje: this.mensaje, asunto: this.asunto}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.mensaje = result;
    });


  }

 
}

