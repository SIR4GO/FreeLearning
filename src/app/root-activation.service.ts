import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {LoginService} from './dashboard/auth/login.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class RootActivationService implements CanActivate {

  constructor(private route: Router, private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const token = localStorage.getItem('token');
    return this.loginService.isLogin(token).pipe(
      map(() => true),
      catchError(() => {
        this.route.navigate(['/login-admin']);
        return of(false);
      })
    );

  }

}
