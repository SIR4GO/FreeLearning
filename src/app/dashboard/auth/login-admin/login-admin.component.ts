import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {LoginRequest} from '../../../models/LoginRequest';
import {validate} from 'class-validator';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  hide = true;
  errorMsg = '';
  loginRequest: LoginRequest;

  constructor(private loginService: LoginService , private router: Router) {
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
            localStorage.setItem('token' , res.data.token);
            this.router.navigate(['/dashboard/post']);
          },
          err => {
              this.errorMsg = '* username or password not correct';
          });
      }
    });
  }
}
