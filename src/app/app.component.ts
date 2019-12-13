import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from './post/post.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlString: any;
  title = 'app';

  constructor(public sanitizer: DomSanitizer) { }



  show() {
    console.log(this.htmlString);
  }
}


