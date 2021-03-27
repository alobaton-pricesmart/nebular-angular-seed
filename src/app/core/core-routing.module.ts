import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/guards/auth/auth.guard';
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
                path: 'management',
                loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
            }
        ],
        canActivate: [AuthGuard],
        data: {
            preload: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule { }
