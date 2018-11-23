import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SecurityModule } from './security/security.module';
import { CoreRoutingModule } from './core/core-routing.module';

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
        loadChildren: () => CoreRoutingModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
