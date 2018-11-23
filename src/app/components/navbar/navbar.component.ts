import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private appComponenet: AppComponent
  ) { }

  ngOnInit() {
    this.user = this.userService.getUserLoggedIn();
  }
  
  logOut() {
    this.appComponenet.showLoginTickets();
    this.appComponenet.formReset();

  }

}
