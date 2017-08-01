import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    private Server = {
        GETGrocery: '/api/grocery'
    };

    getGrocery(): Observable<number> {
        return this.http.get(this.Server.GETGrocery)
            .map(function(res) {
                <number> res.json()
            })
            .catch(error => Observable.throw(error.json().error || 'Server error'))
    }

}