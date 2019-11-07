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
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbToastrModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbSelectModule,
} from '@nebular/theme';
import { DEFAULT_THEME } from './styles/theme-default';
import { COSMIC_THEME } from './styles/theme-cosmic';
import { CORPORATE_THEME } from './styles/theme-corporate';
import { ThemeSwitcherListComponent } from './components/theme-switcher-list/theme-switcher-list.component';
import { SharedModule } from '../shared/shared.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FONT_AWSOME_ICONS } from './styles/icons';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { FieldComponent } from './components/field/field.component';
//import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

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
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbToastrModule.forRoot(),
  NbDatepickerModule.forRoot(),
  NbSpinnerModule,
  NbSelectModule,
  //NbEvaIconsModule,
  NbIconModule
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
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbToastrModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbSelectModule,
  //NbEvaIconsModule,
  NbIconModule
];

const IMPORTS_THEME_MODULE = [
  SharedModule.forRoot(),
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
  ...NbToastrModule.forRoot().providers,
  ...NbDatepickerModule.forRoot().providers,
];

const THEME_COMPONENTS = [
  SwitcherComponent,
  ThemeSwitcherListComponent,
  FieldComponent
];

@NgModule({
  imports: [
    ...IMPORTS_THEME_MODULE,
    ...IMPORTS_NB_MODULES,
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

  constructor() {
    library.add(...FONT_AWSOME_ICONS);
  }
}
