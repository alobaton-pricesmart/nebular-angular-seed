import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SecurityModule } from './security/security.module';
import { CoreModule } from './core/core.module';

const config: ExtraOptions = {
    useHash: true,
};

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => SecurityModule,
    },
    {
        path: 'core',
        loadChildren: () => CoreModule,
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
