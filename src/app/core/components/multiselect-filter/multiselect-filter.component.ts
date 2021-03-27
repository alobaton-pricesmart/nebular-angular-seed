import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaultFilter } from 'ng2-smart-table';
import { FormControl } from '@angular/forms';

export interface Config {
    options: Array<any>,
    selectedOptions: any[],
}

@Component({
    selector: 'app-multiselect-filter',
    templateUrl: 'multiselect-filter.component.html'
})
export class MultiselectFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    options: any[] = [];
    formControl = new FormControl();

    constructor() {
        super();
    }

    ngOnInit() {
        const config: Config = this.column.getFilterConfig();
        this.options = config.options || [];
        this.formControl.setValue(config.selectedOptions || []);
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    onClick(option: any) {
        this.updateQuery();
    }

    updateQuery() {
        this.query = this.formControl.value.map(option => option).join(",");
        this.setFilter();
    }
}