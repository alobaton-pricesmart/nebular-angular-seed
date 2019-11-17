import { Component } from '@angular/core';
import { LangService, DEFAULT_LANG } from './shared/services/lang/lang.service';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'title';

  constructor(private lang: LangService, private titleService: TitleService) {
    this.lang.setDefault(DEFAULT_LANG);
    this.titleService.setTitle(this.title);
  }
}
