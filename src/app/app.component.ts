import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Dpto {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoIS';
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  showLog = true;
  showReg= false;
  hide = false;

  showLogin(){
    this.showLog = true;
    this.showReg = false;
  }

  showRegister(){
    this.showLog = false;
    this.showReg = true;
  }
  hideAll(){
    this.showLog = false;
    this.showReg = false;
    this.hide = true;

  }





}
