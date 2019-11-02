import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PostRequest } from '../models/PostRequest';
import { Observable } from 'rxjs/Observable';
import {SERVER_URL} from '../EndPointsUrls';

@Injectable()
export class PostService {


  constructor(private http: HttpClient) {}

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     // 'Authorization': 'my-auth-token'
    })
  };

   createPost(post: PostRequest): Observable<any> {
     return this.http.post<any>(SERVER_URL + '/post', post , this.httpOptions);
   }
   getPosts(page: number = 0 , size: number = 5): Observable<any> {
     console.log(SERVER_URL + 'post/list?page=' + page + '&size=' + size);
     return this.http.get(SERVER_URL + 'post/list?page=' + page + '&size=' + size);
   }
   getPostById(postId: String): Observable<any> {
     return this.http.get(SERVER_URL + 'post/' + postId);
   }


}
