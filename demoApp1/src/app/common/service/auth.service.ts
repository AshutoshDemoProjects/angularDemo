import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  constructor() { }
  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise(
      (resole, reject) => {
        setTimeout(() => {
          resole(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
