import {Component} from '@angular/core'
import { ChartsModule } from 'ng2-charts';

@Component({
    selector:'pie-chart',
    templateUrl: './pieChart.component.html',
    styleUrls: ['app/app.component/app.component.css']
})

export class pieChartComponent {

    constructor() {}

    private data: any;



    ngOnInit() {
        let ctrl = this;

        console.log('here');

    }
}
