import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component/app.component";
import {NotFoundComponent} from "./404.component/404.component";


import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {JsonpModule, HttpModule} from "@angular/http";
import {pieChartComponent} from "./pieChart.component/pieChart.component";

const appRoutes: Routes = [
    {path: '',          redirectTo: '/', pathMatch: 'full'},
    {path: '404',       component: NotFoundComponent,  data: {title: 'Not Found'}},
    {path: '**',        redirectTo: '/404'}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}