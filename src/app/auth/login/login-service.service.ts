import { Injectable } from '@angular/core';
import * as authService from 'src/app/shared/service-proxy/auth/index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _AuthService: authService.AuthServiceService,
    private router: Router) { }

  login(body) {
    return this._AuthService.login(body);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.setRole();
  }

  setRole() {
    this._AuthService.isAdmin()
      .subscribe(res => {
        localStorage.setItem('isAdmin', 'true');
      });

  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  logOut() {
    this.deleteToken();
    this.router.navigate(['auth/login']);
  }

  isAdmin() {
    var isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin)
      return true;
    else
      return false;
  }

}
