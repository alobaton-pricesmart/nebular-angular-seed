import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreComponent } from './components/core/core.component';
import { CoreRoutingModule } from './core-routing.module';

const BACKOFFICE_MODULES = [
  CoreRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
];

const BACKOFFICE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
];

@NgModule({
  imports: [
    ...BACKOFFICE_MODULES,
  ],
  declarations: [
    ...BACKOFFICE_COMPONENTS,
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
