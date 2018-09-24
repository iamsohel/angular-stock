import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {
    config = environment;

    constructor(private http: HttpClient) {

    }

    get(url: string, option?: any | null): Observable<any> {
        // console.log(this.config);
        return this.http.get(this.config.endPoint + url, option);
    }

    post(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.post(this.config.endPoint + url, body, options);
    }

    put(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.put(this.config.endPoint + url, body, options);
    }

    patch(url: string, body: any | null, options?: any | null): Observable<any> {
        return this.http.patch(this.config.endPoint + url, body, options);
    }

    delete(url: string, options?: any | null): Observable<any> {
        return this.http.delete(this.config.endPoint + url, options);
    }

    getErrorMessage(err: HttpErrorResponse) {
        let message = '';
        console.log(err);
        if (err.error) {
            if (err.error.result) {
                message = err.error.result.error ? err.error.result.error : err.error.result.message;
            } else {
                message = err.message ? err.message : err.statusText;
            }
        }
        return message;
    }

    getBlob(url: string): Promise<Blob> {
        return this.http.get<Blob>(this.config.endPoint + url, {responseType: 'blob' as 'json'})
            .toPromise();
    }
}

export class HttpConfig {
    endPoint?: string;
}
