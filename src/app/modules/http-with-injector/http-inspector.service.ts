import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    constructor(private _cookie: CookieService, @Inject(PLATFORM_ID) public platformId) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let current_user: any;
        if (isPlatformBrowser(this.platformId)) {
            current_user = this._cookie.getObject('currentUser');
        }
        // Clone the request to add the new header.
        if (current_user) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + current_user.token),
            });
            // send the newly created request
            return next.handle(authReq) as any;
        } else {

            // send the newly created request
            return next.handle(req) as any;
        }
    }

}
