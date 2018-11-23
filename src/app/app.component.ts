import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { MatSnackBar } from '@angular/material';
import { User } from './models/user';

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
  userForm: User;
  id: number;

  departamentos: Dpto[] = [
    {value: '1', viewValue: 'Sistemas'},
    {value: '2', viewValue: 'Contabilidad'},
    {value: '3', viewValue: 'Recusros Humanos'},
    {value: '4', viewValue: 'Operaciones'},
    {value: '5', viewValue: 'Administracion'}
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar) { }
  
  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      depto: ['', Validators.required],
      numEmp: ['', Validators.required],
      job: ['', Validators.required]
    })
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get firstname(){
    return this.myForm.get('firstname');
  }

  get lastname() {
    return this.myForm.get('lastname');
  }

  get depto() {
    return this.myForm.get('depto');
  }

  get numEmp() {
    return this.myForm.get('numEmp');
  }

  get job() {
    return this.myForm.get('job');
  }


  login(email: string, password: string , event: Event) {
    event.preventDefault();

    const res = this.userService.loginUser(email, password);
    if (res === true) {
      const name = this.userService.findUser(email);
      this.hideAll();
      this.snackBarMessage('Bienvenido ' + name);
    } else {
      this.snackBarMessage('Usuario no valido');
      this.myForm.reset();
    }
  }

  registerUser(firstname: string, lastname: string, numEmp: number , job: string,
      depto: string, email: string, password: string) {

    this.id = Math.floor(Math.random() * 100 + 1);
    const res =  this.userService.registerUser(this.id, firstname, lastname, email, password, job, depto, numEmp);
    if (res === true) {
      this.hideAll();
      this.snackBarMessage('Bienvenido ' + firstname);
    } else {
      this.snackBarMessage('Usuario no valido');
      this.myForm.reset();
    } 
  }

  showLog = true;
  showReg= false;
  hide = false;

  showLogin() {
    this.showLog = true;
    this.showReg = false;
  }

  showRegister() {
    this.showLog = false;
    this.showReg = true;
  }
  hideAll() {
    this.showLog = false;
    this.showReg = false;
    this.hide = true;

  }
  showLoginTickets() {
    this.showLog = true;
    this.showReg = false;
    this.hide = false;
  }

  formReset() {
    this.myForm.reset();
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }
}
