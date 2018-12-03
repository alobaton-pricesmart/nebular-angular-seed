import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { TranslateService } from '@ngx-translate/core';

export const DEFAULT_LANG = 'es-ES';

@Injectable()
export class LangService {

    constructor(private cookie: CookieService, private translate: TranslateService) {
        this.setDefault(DEFAULT_LANG);
    }

    /**
     * Get the language
     */
    get(): string {
        const lang = this.cookie.get('lang');
        return !lang || lang.length === 0 ? DEFAULT_LANG : lang;
    }

    /**
     * Set the language
     * @param lang language
     */
    set(lang: string) {
        this.cookie.put('lang', lang);
        this.translate.use(lang);
    }

    setDefault(lang: string) {
        this.cookie.put('lang', lang);
        this.translate.setDefaultLang(DEFAULT_LANG);
    }

}
