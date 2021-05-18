import { Component, OnInit } from '@angular/core';
import { AuthService } from './../common/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.auth.login();
  }
  onLogout() {
    this.auth.logout();
  }
}
