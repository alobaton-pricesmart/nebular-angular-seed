import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreComponent } from './components/core/core.component';
import { CoreRoutingModule } from './core-routing.module';

const CORE_MODULES = [
  CoreRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
];

const CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
];

const EXPORTS_CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
];

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
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
