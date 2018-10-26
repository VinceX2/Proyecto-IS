import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  depto: string;
  service: string;
  date: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'Elon Musk', depto: 'Administracion',
    service: 'Redes/No hay internet', date: '10/22/2018', status: 'En Proceso'
  },
  {
    position: 2, name: 'Bill Gates', depto: 'Produccion',
    service: 'Hardware/Pc no enciende', date: '10/19/2018', status: 'Terminado'
  },
  {
    position: 3, name: 'Elliot Alderson', depto: 'IT',
    service: 'Email/No recibe correos', date: '10/17/2018', status: 'En Espera'
  },
  {
    position: 4, name: 'Steve Jobs', depto: 'Contabilidad',
    service: 'Sistema Contable/Contpaq no timbra', date: '10/17/2018', status: 'Por atender'
  },

];

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'depto', 'service', 'date', 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
