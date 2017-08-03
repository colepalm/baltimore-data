import {Component} from '@angular/core';
import {HttpModule, Http} from '@angular/http';

export interface homicideList {
    stores: [{
        name: string;
        neighborhood: string;
    }]
}

export interface vacancyList {
    referenceId: string;
    neighborhood: string;
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

    private storeData: homicideList;
    private vacancyData: vacancyList;
    private errorMessage: string;

    ngOnInit() {
        let ctrl = this;

        ctrl.http.get('/api/homicide')
            .subscribe((response: any) => {
                response.statusText === 'OK' ? ctrl.storeData = JSON.parse(response._body) : ctrl.errorMessage = response._body;
            });

        ctrl.http.get('/api/vacant')
            .subscribe((response: any) => {
                response.statusText === 'OK' ? ctrl.vacancyData = JSON.parse(response._body) : ctrl.errorMessage = response._body
            });

    }
}