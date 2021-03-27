import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from 'ng2-smart-table';
import { DateUtil } from 'src/app/shared/util/date.util';
import 'rxjs/add/operator/map';

export interface Config {
}

@Component({
    selector: 'app-date-filter',
    templateUrl: 'date-filter.component.html'
})
export class DateFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    formControl = new FormControl();
    placeholder: string;

    constructor() {
        super();
    }

    ngOnInit() {
        const config: Config = this.column.getFilterConfig();
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
        this.changesSubscription = this.getChangesSubscription()
            .subscribe(value => {
                this.query = value;
                this.setFilter();
            });
    }

    ngOnChanges() {
        
    }

    getChangesSubscription() {
        return this.formControl.valueChanges.map(range => {
            if (range.start !== null && range.start !== undefined
                && range.end !== null && range.end !== undefined) {
                const start = range.start;
                const end = range.end;
                const initDate = DateUtil.dateToString(start, DateUtil.FECHA_PATTERN_DD_MM_YYYY_HH_MM_SS);
                const endDate = DateUtil.dateToString(end, DateUtil.FECHA_PATTERN_DD_MM_YYYY_HH_MM_SS);
                return `${initDate},${endDate}`;
            }
            return '';
        });
    }

    onClean($event) {
        this.formControl.setValue('');
    }
}