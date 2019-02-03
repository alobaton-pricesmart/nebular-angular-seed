import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'app-field',
    templateUrl: 'field.component.html',
    styleUrls: ['field.component.css']
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