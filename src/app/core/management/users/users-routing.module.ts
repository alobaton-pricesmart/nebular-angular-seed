import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CanDeactivateGuard } from '../../guards/can-deactive.guard';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'user',
        component: CreateUserComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: 'user/:id',
        component: CreateUserComponent,
        canDeactivate: [CanDeactivateGuard]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
