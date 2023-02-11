import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });
  showValidation = false;

  constructor(private Service: LoginServiceService,
  private router : Router) { }

  ngOnInit(): void {
    if(this.Service.isLoggedIn())
    this.router.navigateByUrl('/dashboard')
  }


  login() {
    this.showValidation = false;
    if (!this.loginForm.valid) {
      this.showValidation = true;
      return false;
    }

    this.Service.login(this.loginForm.value)
      .subscribe(res => {
        this.Service.setToken(res['token'])
        this.router.navigateByUrl('/')
      })
  }

}
