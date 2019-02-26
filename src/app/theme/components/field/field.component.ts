import { Component, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-field',
    templateUrl: 'field.component.html',
    styleUrls: ['field.component.scss']
})
export class FieldComponent {

    @Input()
    id: string;

    @Input()
    label: string;

    @Input()
    readonly?: boolean;

    @Input()
    value?: any;

    @Input()
    type?: string;

    @Input()
    control?: FormControl;

    @Input()
    template?: TemplateRef<any>;
}
