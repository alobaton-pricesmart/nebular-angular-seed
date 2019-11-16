import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { CookieModule } from 'ngx-cookie';
import { LangService } from './services/lang/lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { TitleService } from './services/title/title.service';
import { MenuService } from './services/menu/menu.service';
import { ToastService } from './services/toast/toast.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DataTablesModule } from 'angular-datatables';
import { EmptyPipe } from './pipes/empty.pipe';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { AlertService } from './services/alert/alert.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const IMPORTS_BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const EXPORTS_BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const IMPORTS_NGB_MODULES = [
  NgbModule,
  NgbModalModule,
  NgbDropdownModule,
];

const EXPORTS_NGB_MODULES = [
  NgbModule,
  NgbModalModule,
  NgbDropdownModule,
];

const IMPORTS_SHARED_MODULE = [
  ChartModule,
  CookieModule.forRoot(),
  NgMultiSelectDropDownModule.forRoot(),
  DataTablesModule,
  Ng2SmartTableModule
];

const EXPORTS_SHARED_MODULE = [
  TranslateModule,
  ChartModule,
  CookieModule,
  NgMultiSelectDropDownModule,
  DataTablesModule,
  Ng2SmartTableModule,
  EmptyPipe,
  CustomCurrencyPipe
];

const SHARED_MODULE_PROVIDERS = [
  LangService,
  TitleService,
  MenuService,
  ToastService,
  AlertService,
  EmptyPipe,
  CustomCurrencyPipe
];

const SHARED_MODULE_DECLARATIONS = [
  EmptyPipe,
  CustomCurrencyPipe
];

@NgModule({
  imports: [
    ...IMPORTS_BASE_MODULES,
    ...IMPORTS_NGB_MODULES,
    ...IMPORTS_SHARED_MODULE,
  ],
  providers: [
    ...SHARED_MODULE_PROVIDERS,
  ],
  exports: [
    ...EXPORTS_BASE_MODULES,
    ...EXPORTS_NGB_MODULES,
    ...EXPORTS_SHARED_MODULE,
  ],
  declarations: [
    ...SHARED_MODULE_DECLARATIONS
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SHARED_MODULE_PROVIDERS,
      ]
    };
  }
}
