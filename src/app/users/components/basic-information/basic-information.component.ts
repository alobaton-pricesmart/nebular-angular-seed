import { OnInit, Component } from "@angular/core";
import { UserService } from "../../../security/services/user/user.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
    selector: 'app-basic-information',
    templateUrl: 'basic-information.component.html',
    styleUrls: ['basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {
    user: any = {};

    form: FormGroup;
    name: FormControl;
    lastName: FormControl;
    email: FormControl;

    constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
        this.name = new FormControl(this.user.name, [Validators.required]);
        this.lastName = new FormControl(this.user.lastName, [Validators.required]);
        this.email = new FormControl(this.user.email, [Validators.required, Validators.email]);
        this.form = this.fb.group({
            name: this.name,
            lastName: this.lastName,
            email: this.email,
        });

        this.userService.getUser().subscribe((user: any) => {
            if (user) {
                this.user = user;
            } else {
                // this.router.navigate(['/core/404']);
            }
        });        
    }

    ngOnInit() {        
    }
}
