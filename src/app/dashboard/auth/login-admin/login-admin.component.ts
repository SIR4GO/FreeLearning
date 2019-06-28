import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  hide = true;
  constructor() { }

  ngOnInit() {
    const height = $(window).height();
    $('.page-body').height(height);
  }

}
