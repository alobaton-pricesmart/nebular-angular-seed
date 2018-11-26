import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const BUSINESS_MODULES = [
  SharedModule.forRoot(),
];

const BUSINESS_PROVIDERS: any[] = [
];

@NgModule({
  imports: [
    ...BUSINESS_MODULES,
  ],
  providers: [
    ...BUSINESS_PROVIDERS,
  ],
  declarations: []
})
export class BusinessModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BusinessModule,
      providers: [
        ...BUSINESS_PROVIDERS,
      ]
    };
  }
}
