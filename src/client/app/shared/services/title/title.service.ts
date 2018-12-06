import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {

    constructor(private title: Title, private translate: TranslateService) {
    }

    setTitle(title: string) {
        this.translate.get(title).subscribe(reply => {
            this.title.setTitle(reply);
        });
    }
}
