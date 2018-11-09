import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
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
  constructor() { }

  ngOnInit() {
  }

}
