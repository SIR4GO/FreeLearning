import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SERVER_URL} from '../../EndPointsUrls';
import {Observable} from 'rxjs/Observable';
import {LoginRequest} from '../../models/LoginRequest';
import {Router} from '@angular/router';
import {of} from 'rxjs/observable/of';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  login(loginRequest: LoginRequest): Observable<any> {
    const basicToken = 'Basic' + ' ' + btoa(loginRequest.username + ':' + loginRequest.password);
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', basicToken);
    return this.http.get(SERVER_URL + 'secure/login', this.httpOptions);
  }

  isLogin(token): Observable<any> {

    if (token) {
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Basic' + ' ' + token);
      return this.http.get(SERVER_URL + 'secure/login', this.httpOptions);
    }

    this.router.navigate(['/login-admin']);
    return of(false); // return boolean observable
  }

}
