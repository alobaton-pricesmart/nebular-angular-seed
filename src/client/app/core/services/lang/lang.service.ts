import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

const DEFAULT_LANG = 'es-ES';

@Injectable()
export class LangService {

    constructor(private cookie: CookieService) {
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
    }
}
