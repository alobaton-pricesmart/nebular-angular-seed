import { Component } from '@angular/core';
import { LangService, DEFAULT_LANG } from './shared/services/lang/lang.service';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private lang: LangService) {
    this.lang.setDefault(DEFAULT_LANG);
  }
}
