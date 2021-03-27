import { HttpClient, HttpParams } from '@angular/common/http';
import { getDeepFromObject } from '@nebular/auth';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomServerDataSource extends LocalDataSource {

    protected conf: any;
    protected lastRequestCount: number = 0;

    constructor(protected http: HttpClient,
        conf: any | {} = {},
        private customConf: {
            transformDataParams: any,
            transformDataFunc: Function,
            filter: { [field: string]: { param: string, op?: string } }
        }) {
        super();
        this.conf = conf;
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        if (!this.customConf) {
            throw new Error('costomConf can not be null.');
        }
    }

    count(): number {
        return this.lastRequestCount;
    }

    getElements(): Promise<any> {
        return this.requestElements()
            .pipe(map(res => {
                this.lastRequestCount = this.extractTotalFromResponse(res);
                this.data = this.extractDataFromResponse(res);
                this.customConf.transformDataFunc(this.customConf.transformDataParams, this.data);

                return this.data;
            })).toPromise();
    }

    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    protected extractDataFromResponse(res: any): Array<any> {
        const rawData = res.body;
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

        if (data instanceof Array) {
            return data;
        }

        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }

    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    protected extractTotalFromResponse(res: any): number {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        } else {
            const rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }

    protected requestElements(): Observable<any> {
        let httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    }

    protected createRequesParams(): HttpParams {
        let httpParams = new HttpParams();

        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }

    protected addSortRequestParams(httpParams: HttpParams): HttpParams {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                const field = fieldConf['field'];
                const param = this.customConf.filter[field].param;
                httpParams = httpParams.set(this.conf.sortFieldKey, param + ',' + fieldConf.direction.toLowerCase());
            });
        }

        return httpParams;
    }

    protected addFilterRequestParams(httpParams: HttpParams): HttpParams {
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf: any) => {
                if (fieldConf['search']) {
                    const field = fieldConf['field'];
                    const param = this.customConf.filter[field].param;
                    const op = this.customConf.filter[field].op;
                    const search = fieldConf['search'];
                    const searchArr = search.split(',');
                    searchArr.forEach(_search => {
                        httpParams = httpParams.append(
                            this.conf.filterFieldKey.replace('#field#', param),
                            _search + (op !== null && op !== undefined ? ',' + op : ''));
                    });
                }
            });
        }

        return httpParams;
    }

    protected addPagerRequestParams(httpParams: HttpParams): HttpParams {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, String(Number(this.pagingConf['page']) - 1));
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }

        return httpParams;
    }
}