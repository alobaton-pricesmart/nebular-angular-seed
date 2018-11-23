import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbMenuModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbActionsModule,
} from '@nebular/theme';
import { DEFAULT_THEME } from './styles/theme-default';
import { COSMIC_THEME } from './styles/theme-cosmic';
import { CORPORATE_THEME } from './styles/theme-corporate';

const IMPORTS_NB_MODULES = [
  NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME]
  ),
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbContextMenuModule,
  NbUserModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbActionsModule,

];

const EXPORTS_NB_MODULES = [
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbContextMenuModule,
  NbUserModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbActionsModule,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME]
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];

@NgModule({
  imports: [
    ...IMPORTS_NB_MODULES,
  ],
  exports: [
    ...EXPORTS_NB_MODULES,
  ],
  providers: [
    ...NB_THEME_PROVIDERS,
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
