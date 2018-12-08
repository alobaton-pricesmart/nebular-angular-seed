import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    NbAuthComponent,
    NbRegisterComponent,
    NbLogoutComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent
} from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }
