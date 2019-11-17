import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NbToastrService } from '@nebular/theme';
import { forkJoin } from 'rxjs';

@Injectable()
export class ToastService {

    config = { preventDuplicates: true };

    constructor(private translate: TranslateService, public toastr: NbToastrService) {
    }

    info(message: string, title?: string) {
        const observables = [];
        observables.push(this.translate.get(message));

        if (title) {
            observables.push(this.translate.get(title));
        }

        forkJoin(observables).subscribe((response: any) => {
            this.toastr.info(response[0], response[1], this.config);
        });
    }

    success(message: string, title?: string) {
        const observables = [];
        observables.push(this.translate.get(message));

        if (title) {
            observables.push(this.translate.get(title));
        }

        forkJoin(observables).subscribe((response: any) => {
            this.toastr.success(response[0], response[1], this.config);
        });
    }

    error(message: string, title?: string) {
        const observables = [];
        observables.push(this.translate.get(message));

        if (title) {
            observables.push(this.translate.get(title));
        }

        forkJoin(observables).subscribe((response: any) => {
            this.toastr.danger(response[0], response[1], this.config);
        });
    }
}
