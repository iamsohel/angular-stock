import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    canLoad(route: Route) {
        const path = route.path;
        if (path === 'auth' && this.auth.authenticated) {
            this.router.navigate(['dashboard']).catch(err => {
                console.log(err);
            });
            return false;
        } else if (path === 'dashboard' && !this.auth.authenticated) {
            this.router.navigate(['auth']).catch(err => {
            });
            return false;
        }
        return true;
    }
}
