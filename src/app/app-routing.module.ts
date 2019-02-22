import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CoreModule } from './core/core.module';

const config: ExtraOptions = {
    useHash: true,
};

export const routes: Routes = [
    {
        path: 'core',
        loadChildren: './core/core.module#CoreModule',
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
