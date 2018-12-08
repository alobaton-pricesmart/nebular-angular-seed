import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import {
  NbAuthModule,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { AuthGuard } from '../security/guards/auth/auth.guard';
import { RoleService } from '../security/services/role/role.service';
import { SecurityRoutingModule } from '../security/security-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ThemeModule } from '../theme/theme.module';
import {
  EMAIL_PASSWORD_STRATEGY,
  EMAIL_PASSWORD_FORMS,
  EMAIL_PASSWORD_ACCESS_CONTROL
} from './security.config';
import { RequestPassworcComponent } from './components/request-password/request-password.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const IMPORTS_SECURITY_MODULES = [
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
  SecurityRoutingModule,
];

const EXPORTS_NB_AUTH_MODULES = [
  NbAuthModule,
];

const NB_SECURITY_PROVIDERS = [
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup(EMAIL_PASSWORD_STRATEGY),
    ],
    forms: EMAIL_PASSWORD_FORMS,
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: EMAIL_PASSWORD_ACCESS_CONTROL,
  }).providers,
  AuthGuard,
  { provide: NbRoleProvider, useClass: RoleService },
];

const SECURITY_COMPONENTS = [
  AuthComponent,
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  RequestPassworcComponent,
  ResetPasswordComponent,
];

@NgModule({
  imports: [
    ...IMPORTS_SECURITY_MODULES,
  ],
  providers: [
    ...NB_SECURITY_PROVIDERS,
  ],
  exports: [
    ...EXPORTS_NB_AUTH_MODULES,
  ],
  declarations: [
    ...SECURITY_COMPONENTS,
  ]
})
export class SecurityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        ...NB_SECURITY_PROVIDERS,
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: SecurityModule) {
    if (parentModule) {
      throw new Error(`'SecurityModule' has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
