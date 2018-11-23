import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  currentUser: string;
  user: User;
  num: Number;
  users: User[] = [
    new User(1, 'Vicente', 'Garcia', 'vicente@gmail.com', '123garcia', 'Developer', 'Redes', 100),
    new User(2, 'Antonio', 'Salgado', 'antonio@gmail.com', '123salgado', 'Developer', 'UX', 101),
  ];

  
  newUser = new User;

  constructor(
    private _http: Http,
  ) { }

  createUser() {
    
  }


  update(user: User) {
    return this._http.put('/users/' +  user._id, user)
      .pipe(map(data => data.json())).toPromise();
    
  }

  getUser(user: User) {
    return this._http.get('/users/' + user._id)
      .pipe(map(data => data.json())).toPromise();
  }

  getUsers() {
    return this._http.get('/users')
      .pipe(map(data => data.json())).toPromise();
  }

  getNameUserLoggedIn () {
    return this.currentUser;
  }
  
  getUserLoggedIn() {
    return this.user;
  }

  loginUser(email: string, password: string) {

    for (let index = 0; index < this.users.length; index++) {
      try {
        if (email === this.users[index].email && password === this.users[index].password) {
          this.user = this.users[index];
          return true;
        }
      } catch (error) {
        return false;
      }
    }
  }

  findUser (email: string) {
    for (let index = 0; index < this.users.length; index++) {
      try {
        if (email === this.users[index].email) {
          this.currentUser = this.users[index].first_name;
          return this.currentUser;
        }
      } catch (error) {
      }
    }
  }

  registerUser(id: number, firstname: string, lastname: string, email: string,
    password: string, job: string, depto: string, numEmp: number ) {
      this.newUser._id = id;
      this.newUser.first_name = firstname;
      this.newUser.last_name = lastname;
      this.newUser.email = email;
      this.newUser.password = password;
      this.newUser.job = job;
      this.newUser.depto = depto;
      this.newUser.numEmp = numEmp;

    try {
      this.users.push(this.newUser);
      this.currentUser = this.newUser.first_name;
      this.user = this.newUser;
      return true;
    } catch (error) {
      return false;
    }
  }
}

