import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CookieOptions, CookieService} from 'ngx-cookie';
import {UserData} from './auth.module';
import {isPlatformBrowser, Location} from '@angular/common';
import {HttpService} from '../http-with-injector/http.service';
import {Observable} from 'rxjs';

export class AuthConfig {
    cookiePath: string;
    userKey?: string;
}

@Injectable()
export class AuthService implements CanActivate {
    cookieOptions: CookieOptions;

    constructor(
        private _cookies: CookieService,
        private router: Router,
        @Inject(PLATFORM_ID) public platform_id,
        private http: HttpService,
        private location: Location
    ) {
        this.cookieOptions = {};

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.data.auth) {
            const token = this.getToken();
            if (token) {
                return true;
            } else {
                this.navigateTo('login').then();
                return false;
            }
        }
        return true;
    }

    checkLogin(): Observable<boolean | any> {
        return new Observable((observer) => {
            setInterval(() => {
                if (this.authenticated) {
                    observer.next(this.authenticated);
                } else {
                    observer.next(false);
                }
            }, 1000);
        });
    }

    getCookie(name: string): any {
        let cookie;
        if (isPlatformBrowser(this.platform_id)) {
            cookie = this._cookies.getObject(name.trim());
        }
        if (cookie) {
            return cookie;
        } else {
            return false;
        }
    }

    setCookies(name: string, value: any) {
        this._cookies.putObject(name.trim(), value, this.cookieOptions);
    }

    removeCookie(name: string): void {
        this._cookies.remove(name, this.cookieOptions);
    }

    getToken(): string | boolean {
        const current_user = this.getCookie('currentUser');
        if (current_user) {
            return current_user.token;
        }
        return false;
    }

    navigateTo(name: string): Promise<any> {
        const promise = this.router.navigate([name]);
        return promise;
    }

    roles() {
        const cookie: any = this.getCookie('currentUser');
        const roles = cookie.user_role ? cookie.user_role.split(',') : [];
        return roles;
    }

    matchRole(name: string): boolean {
        const roles = this.roles();
        console.log(roles);
        const role = roles.indexOf(name);
        return role >= 0;
    }

    logout() {
        return this.http.get('users/logout')
            .toPromise();
    }

    private eliminateUser() {
        const path = this.location.path();
        this.logout().then(() => {
            this.removeCookie('currentUser');
            this.router.navigate(['auth', 'login'], {queryParams: {redirectTo: path}}).catch(err => {
            });
        }).catch(() => {
            this.removeCookie('currentUser');
            this.router.navigate(['auth', 'login'], {queryParams: {redirectTo: path}}).catch(err => {
            });
        });
    }

    private updateRemember(data) {
        const date = new Date(data.remember_time);
        date.setSeconds(date.getSeconds() + 1);
        data.remember_time = date;
        this.setCookies('currentUser', data);
    }

    get userData(): UserData {
        return this.getCookie('currentUser');
    }

    get authenticated(): boolean {
        const user_data = this.getCookie('currentUser');
        if (user_data && !user_data.remember_me) {
            const remember_time = new Date(user_data.remember_time);
            const now = new Date();
            const diff = remember_time.getTime() - now.getTime();
            if (diff > 0) {
                this.updateRemember(user_data);
                return true;
            } else {
                this.eliminateUser();
            }
        } else {
            return user_data && user_data.remember_me;
        }
    }

    get is_admin(): boolean {
        return this.matchRole('admin');
    }

    get is_employee(): boolean {
        return this.matchRole('employee');
    }

    get is_hr(): boolean {
        return this.matchRole('hr');
    }

    get is_pm(): boolean {
        return this.matchRole('pm');
    }

    get user_roles(): string[] {
        return this.roles();
    }

}
