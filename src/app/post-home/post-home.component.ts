import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {PostService} from '../post/post.service';
import {PostResponse} from '../models/PostResponse';

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

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts( this.defaultIndex , this.defaultPageSize);
  }
  getPosts(pageIndex , size) {
    this.postService.getposts( pageIndex , size).subscribe((res) => {
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
