import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import {PostResponse} from '../models/PostResponse';
import {PostService} from '../post/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute , private  postService: PostService, public sanitizer: DomSanitizer) { }

  post: PostResponse;
  ngOnInit() {
    $('.mat-card-header-text').css( {margin: '0'} );
    this.post = new PostResponse();
    this.loadPost();
  }

  loadPost() {
     const id = this.route.snapshot.paramMap.get('id');
     this.postService.getPostById(id).subscribe(res => {
       this.post = res.data;
       console.log(this.post);
     }, error => {
        console.log(error);
     });
  }

}
