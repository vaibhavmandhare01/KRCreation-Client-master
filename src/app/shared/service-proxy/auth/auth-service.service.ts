import { Injectable, Inject, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from './auth.model';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerComponent } from '../../components/error-handler/error-handler.component';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../../components/error-handler/error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //@ViewChild('ErrorHandler') ErrorHandler: ErrorHandlerComponent

  public apiUrl: string;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private _http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) { this.apiUrl = environment.baseUrl }



  register(body: any) {
    return this._http.post<User>(this.apiUrl + 'register', body, this.noAuthHeader)
    //.pipe(catchError(err => this.errorHandler.catchError(err)))
  }

  login(body: any) {
    return this._http.post<any>(this.apiUrl + 'authenticate', body, this.noAuthHeader)
    //.pipe(catchError(err => this.errorHandler.catchError(err)));
  }

  getUserProfile() {
    return this._http.get(this.apiUrl + '/userProfile').pipe(catchError(err => this.errorHandler.catchError(err)));
  }

  isAdmin() {
    return this._http.get(this.apiUrl + '/isAdmin').pipe(catchError(err => this.errorHandler.catchError(err)));
  }

  /*  login(body: any) {
     return this._http.post<any>(this.apiUrl + 'authenticate', body, {
       observe: 'body',
       headers: new HttpHeaders().append('Content-Type', 'application/json')
     }).pipe(catchError(err => this.errorHandler.catchError(err)));
   } */
}
