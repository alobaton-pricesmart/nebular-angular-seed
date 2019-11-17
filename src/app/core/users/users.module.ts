import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';
import { UsersService } from './services/users/users.service';

const USERS_MODULES = [
  UsersRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot()
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

const USERS_PROVIDERS = [
  UsersService
];

@NgModule({
  imports: [
    ...USERS_MODULES
  ],
  declarations: [
    ...USERS_COMPONENTS
  ],
  exports: [
    ...EXPORTS_USERS_COMPONENTS
  ],
  entryComponents: [
    ...EXPORTS_USERS_COMPONENTS,
  ],
  providers: [
    ...USERS_PROVIDERS
  ]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
        ...USERS_PROVIDERS
      ]
    };
  }
}
