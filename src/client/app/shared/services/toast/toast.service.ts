import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NbToastrService } from '@nebular/theme';

@Injectable()
export class ToastService {

    constructor(private translate: TranslateService, public toastr: NbToastrService) {
    }

    showInfo(key: string) {
        this.translate.get(key).subscribe((response: string) => {
            this.toastr.info(response);
        });
    }

    showSuccess(key: string) {
        this.translate.get(key).subscribe((response: string) => {
            this.toastr.success(response);
        });
    }

    showError(key: string) {
        this.translate.get(key).subscribe((response: string) => {
            this.toastr.danger(response);
        });
    }
}
