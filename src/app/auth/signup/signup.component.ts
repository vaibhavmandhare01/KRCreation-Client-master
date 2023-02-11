import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from './register-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });

  showValidation = false;

  constructor(
    private _RegisterServiceService: RegisterServiceService,
    private Service: LoginServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if(this.Service.isLoggedIn())
    this.router.navigateByUrl('/dashboard')
  }

  register() {
    this.showValidation = false;
    if (!this.signupForm.valid) {
      this.showValidation = true;
      return false;
    }


    this._RegisterServiceService.register(this.signupForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }

}
