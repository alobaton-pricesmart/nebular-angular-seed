import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreComponent } from './components/core/core.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LangSwitcherListComponent } from './components/lang-switcher-list/lang-switcher-list.component';

const CORE_MODULES = [
  CoreRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
];

const CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
  NotFoundComponent,
  LangSwitcherListComponent,
];

const EXPORTS_CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
  NotFoundComponent,
  LangSwitcherListComponent,
];

const CORE_MODULE_PROVIDERS: [] = [];

@NgModule({
  imports: [
    ...CORE_MODULES,
  ],
  declarations: [
    ...CORE_COMPONENTS,
  ],
  exports: [
    ...EXPORTS_CORE_COMPONENTS,
  ],
  entryComponents: [
    ...EXPORTS_CORE_COMPONENTS,
  ],
  providers: [
    ...CORE_MODULE_PROVIDERS,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...CORE_MODULE_PROVIDERS,
      ]
    };
  }
}
