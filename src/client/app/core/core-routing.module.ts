import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CoreComponent } from './components/core/core.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersModule } from '../users/users.module';

export const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: '404',
                component: NotFoundComponent,
            },
            {
                path: 'dashboard',
                loadChildren: () => DashboardModule
            },
            {
                path: 'users',
                loadChildren: () => UsersModule
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule { }
