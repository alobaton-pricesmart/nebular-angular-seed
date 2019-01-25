import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';
import { BusinessModule } from '../business/business.module';

const USERS_MODULES = [
  UsersRoutingModule,
  ThemeModule.forRoot(),
  SharedModule.forRoot(),
  BusinessModule.forRoot(),
];

const USERS_COMPONENTS = [
  UsersComponent,
  CreateUserComponent,
  ProfileComponent,
  BasicInformationComponent
];

const EXPORTS_USERS_COMPONENTS = [
  CreateUserComponent,
];

@NgModule({
  imports: [
    ...USERS_MODULES
  ],
  declarations: [
    ...USERS_COMPONENTS
  ],
  exports: [
    ...EXPORTS_USERS_COMPONENTS,
  ],
  entryComponents: [
    ...EXPORTS_USERS_COMPONENTS,
  ]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
      ]
    };
  }
}
