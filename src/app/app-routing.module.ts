import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const config: ExtraOptions = {
    useHash: true,
};

export const routes: Routes = [
    {
        path: 'core',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)        
    },
    {
        path: 'auth',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
    },
    {
        path: '',
        redirectTo: 'core',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'core/404',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
