import {Component} from '@angular/core';
import {HttpModule, Http} from '@angular/http';

export interface groceryStoreList {
    stores: [{
        name: string;
        neighborhood: string;
    }]
}
@Component({
    selector: 'app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    providers: [HttpModule]
})
export class AppComponent {
    constructor(private http: Http) {

    }

    private storeData: groceryStoreList;
    private errorMessage: string;

    ngOnInit() {
        let ctrl = this;

        ctrl.http.get('/api/grocery')
            .subscribe((response: any) => {
                response.statusText === 'OK' ? ctrl.storeData = response._body : ctrl.errorMessage = response._body
            })
    }
}