import { Component } from '@angular/core';
import { LangService, DEFAULT_LANG } from './shared/services/lang/lang.service';
import { TitleService } from './shared/services/title/title.service';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private lang: LangService, private title: TitleService) {
    this.lang.setDefault(DEFAULT_LANG);
    this.title.setTitle('title');
  }
}
