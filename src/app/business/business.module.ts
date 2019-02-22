import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services/users/users.service';
import { HttpErrorHandler } from './helpers/http-error-handler';
import { RolesService } from './services/roles/roles.service';

const BUSINESS_MODULES = [
  SharedModule.forRoot(),
];

const BUSINESS_PROVIDERS: any[] = [
  HttpErrorHandler,
  UsersService,
  RolesService,
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
