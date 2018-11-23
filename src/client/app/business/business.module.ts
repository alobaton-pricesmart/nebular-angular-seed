import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeadquartersService } from './services/headquarters/headquarters.service';

const BUSINESS_MODULES = [
  SharedModule.forRoot(),
];

const BUSINESS_PROVIDERS = [
  HeadquartersService,
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
