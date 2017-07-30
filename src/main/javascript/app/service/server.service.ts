import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    private Server = {
        GETGrocery: '/grocery'
    };

    getGrocery(): Observable<number> {
        return this.http.get(this.Server.GETGrocery)
            .map(res => <number> res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'))
    }

}