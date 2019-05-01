import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'create',
        component: CreateUserComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path: '',
                redirectTo: 'basic-information',
                pathMatch: 'full'
            },
            {
                path: 'basic-information',
                component: BasicInformationComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
