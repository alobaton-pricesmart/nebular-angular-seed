import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { ManagementRoutingModule } from './management-routing.module';

const MANAGEMENT_MODULES = [
    ManagementRoutingModule,
    ThemeModule.forRoot(),
    SharedModule.forRoot(),
];

const MANAGEMENT_COMPONENTS = [
];

const EXPORTS_MANAGEMENT_COMPONENTS = [
];

const MANAGEMENT_MODULE_PROVIDERS = [
];

@NgModule({
    imports: [
        ...MANAGEMENT_MODULES,
    ],
    declarations: [
        ...MANAGEMENT_COMPONENTS,
    ],
    exports: [
        ...EXPORTS_MANAGEMENT_COMPONENTS,
    ],
    entryComponents: [
        ...EXPORTS_MANAGEMENT_COMPONENTS,
    ],
    providers: [
        ...MANAGEMENT_MODULE_PROVIDERS,
    ]
})
export class ManagementModule {
    static forRoot(): ModuleWithProviders<ManagementModule> {
        return {
            ngModule: ManagementModule,
            providers: [
                ...MANAGEMENT_MODULE_PROVIDERS,
            ]
        };
    }
}
