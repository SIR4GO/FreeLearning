import { Component, OnInit   } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit() {
    const height = $(window).height();
    $('.menu').height(height);
    $('.content').height(height);

  }

// tslint:disable-next-line: member-ordering

  constructor() {}


  controllMenue(){
    console.log('here');
    $('.menu').toggleClass('toggle-menu');

  }
}
