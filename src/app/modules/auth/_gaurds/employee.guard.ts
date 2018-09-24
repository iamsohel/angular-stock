import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable()
export class EmployeeGuard implements CanActivate, CanLoad {
    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.auth.is_employee) {
            this.router.navigate(['/dashboard']).catch(err => {
                console.log(err);
            });
        }
        return true;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.auth.is_employee) {
            this.router.navigate(['/dashboard']).catch(err => {
                console.log(err);
            });
        }
        return true;
    }
}
