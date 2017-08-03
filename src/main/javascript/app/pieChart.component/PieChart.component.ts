import {Component, Input} from '@angular/core'
import { ChartsModule } from 'ng2-charts';
import {groceryStoreList, vacancyList} from "../app.component/app.component";

@Component({
    selector:'pie-chart',
    template: `<div style="display: block">
                    <div (click)="cons()">wfewfewfewfewfwe</div>
                </div>`,
    styleUrls: ['app/app.component/app.component.css']
})

export class PieChartComponent {

    @Input() groceryData: groceryStoreList;
    @Input() vacancyData: vacancyList;

    public cons() {
        console.log(this.vacancyData, 'woiefjew');
    }

    ngOnInit() {
        let ctrl = this;
    }
}
