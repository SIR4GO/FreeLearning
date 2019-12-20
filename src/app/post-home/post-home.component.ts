import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {PostService} from '../post/post.service';
import {PostResponse} from '../models/PostResponse';
import * as $ from 'jquery';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  length: number;
  defaultPageSize: any = 3;
  defaultIndex: any = 0;
  pageSizeOptions: number[] = [3];
  posts: PostResponse [];

  constructor(public sanitizer: DomSanitizer, private postService: PostService) {}

  ngOnInit() {

    const height = $(window).height();
    $('.full-body').height(height);
    this.getPosts( this.defaultIndex , this.defaultPageSize);
  }
  getPosts(pageIndex , size) {
    this.postService.getPosts( pageIndex , size).subscribe((res) => {
        this.length = res.data.totalElements;
        this.posts = res.data.content;
    }, error => {
         console.log(error);
    });
  }

  toPage($event: PageEvent) {
    const index = $event.pageIndex;
    this.getPosts(index , this.defaultPageSize);
  }
}
