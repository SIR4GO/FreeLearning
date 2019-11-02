import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SERVER_URL} from '../../EndPointsUrls';
import {Observable} from 'rxjs/Observable';
import {LoginRequest} from '../../models/LoginRequest';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  login(loginRequest: LoginRequest): Observable<any> {
    const basicToken = btoa(loginRequest.username + ':' + loginRequest.password);
    this.httpOptions.headers.set('Authorization', basicToken);
    return this.http.get(SERVER_URL + 'login', this.httpOptions);
  }

}
