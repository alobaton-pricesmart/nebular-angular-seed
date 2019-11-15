import { OnInit, Component } from '@angular/core';
import { UserService } from '../../../../security/services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormComponent } from 'src/app/shared/util/form.component';
import { User } from 'src/app/models/users.interfaces';
import { CanComponentDeactivate } from 'src/app/core/guards/can-deactive.guard';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-basic-information',
    templateUrl: 'basic-information.component.html',
    styleUrls: ['basic-information.component.scss']
})
export class BasicInformationComponent extends FormComponent implements OnInit, CanComponentDeactivate {
    user: any = {};

    form: FormGroup;
    isForm: Promise<any>;

    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private translate: TranslateService) {
        super();

        this.userService.getUser().subscribe((user: any) => {
            if (user) {
                this.user = user;
            } else {
                // this.router.navigate(['/core/404']);
            }
        });
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm(user?: User) {
        this.isForm = Promise.resolve(
            this.form = this.formBuilder.group({
                id: new FormControl(user ? user.id : null, [Validators.required]),
                name: new FormControl(user ? user.name : null, [Validators.required]),
                lastName: new FormControl(user ? user.lastName : null, [Validators.required]),
                email: new FormControl(user ? user.email : null, [Validators.required, Validators.email])
            })
        );

        this.form.controls.id.disable();
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.isPristine(this.form)) {
            return this.alertService.confirm(this.translate.instant('general.messages.onDeactive'), 'info');
        }

        return true;
    }

    update() {
    }
}
