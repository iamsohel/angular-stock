import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable()
export class AdminGuard implements CanActivate, CanLoad {
    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.auth.is_admin) {
            this.router.navigate(['/dashboard']).catch(err => {
                console.log(err);
            });
        }
        return true;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log(route);
        if (!this.auth.is_admin) {
            this.router.navigate(['/dashboard']).catch(err => {
                console.log(err);
            });
        }
        return true;
    }
}
