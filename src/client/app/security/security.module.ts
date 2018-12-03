import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import {
  NbAuthModule,
  NbPasswordAuthStrategy,
  NbAuthSocialLink
} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { AuthGuard } from '../security/guards/auth/auth.guard';
import { RoleService } from '../security/services/role/role.service';
import { SecurityRoutingModule } from '../security/security-routing.module';
import { SharedModule } from '../shared/shared.module';

const socialLinks: NbAuthSocialLink[] = [];

const IMPORTS_SECURITY_MODULES = [
  SharedModule.forRoot(),
  SecurityRoutingModule,
];

const EXPORTS_NB_AUTH_MODULES = [
  NbAuthModule,
];

const NB_SECURITY_PROVIDERS = [
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: 'http://',
        login: {
          endpoint: '/auth/sign-in',
        },
        register: {
          endpoint: '/auth/sign-up',
        },
        logout: {
          endpoint: '/auth/sign-out',
        },
        requestPass: {
          endpoint: '/auth/request-pass',
        },
        resetPass: {
          endpoint: '/auth/reset-pass',
        },
      }),
    ],
    forms: {
      login: {
        redirectDelay: 0,
        strategy: 'email',
        rememberMe: true,
        showMessages: {
          success: true,
          error: true,
        },
        socialLinks: socialLinks,
      },
      register: {
        redirectDelay: 0,
        strategy: 'email',
        showMessages: {
          success: true,
          error: true,
        },
        terms: true,
        socialLinks: socialLinks,
      },
      requestPassword: {
        redirectDelay: 0,
        strategy: 'email',
        showMessages: {
          success: true,
          error: true,
        },
        socialLinks: socialLinks,
      },
      resetPassword: {
        redirectDelay: 0,
        strategy: 'email',
        showMessages: {
          success: true,
          error: true,
        },
        socialLinks: socialLinks,
      },
      logout: {
        redirectDelay: 0,
        strategy: 'email',
      },
      validation: {
        password: {
          required: true,
          minLength: 4,
          maxLength: 50,
        },
        email: {
          required: true,
        },
        fullName: {
          required: false,
          minLength: 4,
          maxLength: 50,
        },
      },
    },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  AuthGuard,
  { provide: NbRoleProvider, useClass: RoleService },
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
  declarations: []
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
