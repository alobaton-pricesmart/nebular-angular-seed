import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { TranslateService } from '@ngx-translate/core';
import { Lang, GetOptions } from './lang.service.interfaces';

export const DEFAULT_LANG = 'es-ES';

export const LANGS: Lang[] = [
    {
        title: 'Español',
        key: 'es-ES'
    }
];

@Injectable()
export class LangService {

    langs = LANGS.reduce((obj: any, item: any) => {
        obj[item['key']] = item;
        return obj;
    }, {});

    constructor(private cookie: CookieService, private translate: TranslateService) {
        this.setDefault(DEFAULT_LANG);
    }

    /**
     * Get the language
     */
    get(options: GetOptions): string {
        const lang = this.cookie.get('lang');

        if (options.translated) {
            return this.langs[lang].title;
        }
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
