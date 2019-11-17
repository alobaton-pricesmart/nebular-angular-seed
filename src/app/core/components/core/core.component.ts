import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
