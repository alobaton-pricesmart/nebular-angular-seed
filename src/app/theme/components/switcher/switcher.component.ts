import { Component, ViewChild, Input } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
    selector: 'app-switcher',
    templateUrl: 'switcher.component.html',
    styleUrls: ['switcher.component.scss']
})
export class SwitcherComponent {
    @Input()
    switcherListComponent: any;

    @Input()
    title: string;

    @Input()
    icon: any;

    @ViewChild(NbPopoverDirective)
    popover: NbPopoverDirective;

    constructor() { }
}
