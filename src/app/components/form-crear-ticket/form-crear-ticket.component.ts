import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../toolbar-options/toolbar-options.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-form-crear-ticket',
  templateUrl: './form-crear-ticket.component.html',
  styleUrls: ['./form-crear-ticket.component.css']
})
export class FormCrearTicketComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormCrearTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
