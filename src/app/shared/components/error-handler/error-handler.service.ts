import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  catchError(error): Observable<Response> {

    if (error.error) {
      if(error.error.length > 0){
        alert(error.error[0]);
      }
      else if(error.error){
        alert(error.error.message);
      }
    }
    else if (error && error.error && error.error.message) {
      alert(error.error.message);
    }
    else if (error && error.message) {
      alert(error.message);
    }
    else {
      alert(JSON.stringify(error));
    }

    return throwError(error);
  }
}
