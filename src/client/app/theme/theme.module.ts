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
  NbPopoverModule,
} from '@nebular/theme';
import { DEFAULT_THEME } from './styles/theme-default';
import { COSMIC_THEME } from './styles/theme-cosmic';
import { CORPORATE_THEME } from './styles/theme-corporate';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { ThemeSwitcherListComponent } from './components/theme-switcher-list/theme-switcher-list.component';
import { CommonModule } from '@angular/common';

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
  NbPopoverModule,
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
  NbPopoverModule,
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

const THEME_COMPONENTS = [
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
];

@NgModule({
  imports: [
    ...IMPORTS_NB_MODULES,
    CommonModule,
  ],
  declarations: [
    ...THEME_COMPONENTS,
  ],
  exports: [
    ...EXPORTS_NB_MODULES,
    ...THEME_COMPONENTS,
  ],
  entryComponents: [
    ...THEME_COMPONENTS,
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
