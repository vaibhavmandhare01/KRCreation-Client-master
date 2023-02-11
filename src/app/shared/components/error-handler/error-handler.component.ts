import { Component, OnInit } from '@angular/core';
import { Observable, throwError, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  subscriber = new Subscription();

  constructor() { }

  ngOnInit(): void {
   
  }

  catchError(error): Observable<Response> {
    if (error && error.error && error.error.message) {
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
