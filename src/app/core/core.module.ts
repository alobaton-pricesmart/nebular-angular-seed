import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreComponent } from './components/core/core.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThemeModule } from '../theme/theme.module';
import { CanDeactivateGuard } from './guards/can-deactive.guard';
import { RolesService } from './services/roles/roles.service';
import { MultiselectFilterComponent } from './components/multiselect-filter/multiselect-filter.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersService } from './services/users/users.service';

const CORE_MODULES = [
  CoreRoutingModule,
  ThemeModule.forRoot(),
  SharedModule.forRoot(),
];

const CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
  NotFoundComponent,
  MultiselectFilterComponent,
  DateFilterComponent,
  FooterComponent
];

const EXPORTS_CORE_COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  SidebarComponent,
  NotFoundComponent,
  MultiselectFilterComponent,
  DateFilterComponent,
  FooterComponent
];

const CORE_MODULE_PROVIDERS = [
  CanDeactivateGuard,
  RolesService,
  UsersService
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
  ],
  providers: [
    ...CORE_MODULE_PROVIDERS,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...CORE_MODULE_PROVIDERS,
      ]
    };
  }
}
