import { Injectable } from '@angular/core';
import * as authService from 'src/app/shared/service-proxy/auth/index';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private _AuthService: authService.AuthServiceService) { }

  register(body) {
    return this._AuthService.register(body);
  }

}
