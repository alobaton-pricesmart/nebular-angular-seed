import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartModule } from 'angular2-chartjs';
import { CookieModule } from 'ngx-cookie';
import { LangService } from './services/lang/lang.service';

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
];

const EXPORTS_NGB_MODULES = [
  NgbModule,
  NgbModalModule,
];

const IMPORTS_SHARED_MODULE = [
  FontAwesomeModule,
  Ng2SmartTableModule,
  ChartModule,
  CookieModule.forRoot(),
];

const EXPORTS_SHARED_MODULE = [
  FontAwesomeModule,
  Ng2SmartTableModule,
  ChartModule,
  CookieModule,
];

const SHARED_MODULE_PROVIDERS = [
  LangService,
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
  declarations: [],
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
