import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { FusionChartsModule } from 'angular2-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import {AppComponent} from "./app.component/app.component";
import {NotFoundComponent} from "./404.component/404.component";
import {PieChartComponent} from "./pieChart.component/PieChart.component";


import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {JsonpModule, HttpModule} from "@angular/http";

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
        RouterModule.forRoot(appRoutes),
        FusionChartsModule.forRoot(FusionCharts, Charts),
    ],
    declarations: [
        AppComponent,
        PieChartComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}