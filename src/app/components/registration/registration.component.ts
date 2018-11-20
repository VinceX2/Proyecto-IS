import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Dpto {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;

  departamentos: Dpto[] = [
    {value: '1', viewValue: 'Sistemas'},
    {value: '2', viewValue: 'Contabilidad'},
    {value: '3', viewValue: 'Recusros Humanos'},
    {value: '4', viewValue: 'Operaciones'},
    {value: '5', viewValue: 'Administracion'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
        password: ['',[
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]],
        nombre: '',
        apellido: '',
        departamento: '',
        numEmp: '',
        puesto: ''


      
    })
  }
  // ----------------------------------------------------------------------

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  



}
