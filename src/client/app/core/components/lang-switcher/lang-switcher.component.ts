import { Component, ViewChild, OnInit } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { LangSwitcherListComponent } from '../lang-switcher-list/lang-switcher-list.component';
import { LangService } from '../../services/lang/lang.service';

@Component({
    moduleId: module.id,
    selector: 'app-lang-switcher',
    templateUrl: 'lang-switcher.component.html',
    styleUrls: ['lang-switcher.component.css']
})
export class LangSwitcherComponent implements OnInit {
    lang: string;

    @ViewChild(NbPopoverDirective)
    popover: NbPopoverDirective;

    switcherListComponent = LangSwitcherListComponent;

    constructor(private langService: LangService) { }

    ngOnInit() {
        this.lang = this.langService.get();
    }
}
