import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CoreComponent } from './components/core/core.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule { }
