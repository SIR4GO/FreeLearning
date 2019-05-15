import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const height = $(window).height();
    $('header').height(height);
    $('.slide').css( { 'width' : '60%' , margin: 'auto' } );
    $('.carousel-inner').css({ 'border-radius': '2px'});


  }

}
