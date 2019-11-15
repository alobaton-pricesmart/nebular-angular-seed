import { Component, Input, TemplateRef, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-field',
    templateUrl: 'field.component.html',
    styleUrls: ['field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldComponent),
            multi: true
        }
    ]
})
export class FieldComponent implements OnInit, ControlValueAccessor {

    @Input()
    id: string;

    @Input()
    label: string;

    @Input()
    type?: string;

    @Input()
    readonly?: boolean;

    @Input()
    disabled?: boolean;

    @Input()
    status?: any;

    @Input()
    template?: TemplateRef<any>;

    model: any;

    onChange = (_: any) => { };

    onTouched = () => { };

    constructor() {
    }

    ngOnInit() {
    }

    writeValue(model: any): void {
        this.model = model || null;
        this.onChange(this.model);
    }

    registerOnChange(fn: (modelo: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    get value(): any {
        return this.model;
    }

    set setValue(modelo: any) {
        if (modelo === this.model) {
            this.model = modelo;
        }
    }
}
