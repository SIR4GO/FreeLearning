import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {LoginRequest} from '../../../models/LoginRequest';
import {validate} from 'class-validator';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  hide = true;
  loginRequest: LoginRequest;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    const height = $(window).height();
    $('.page-body').height(height);
    this.loginRequest = new LoginRequest();
  }

  public login() {
    validate(this.loginRequest).then(errors => { // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        console.log(this.loginRequest);
      } else {
        this.loginService.login(this.loginRequest).subscribe(res => {
            console.log(res);
          },
          err => {
            console.log(err);
          });
      }
    });
  }
}
