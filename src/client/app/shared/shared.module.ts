import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartModule } from 'angular2-chartjs';

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
];

const EXPORTS_SHARED_MODULE = [
  FontAwesomeModule,
  Ng2SmartTableModule,
  ChartModule,
];

@NgModule({
  imports: [
    ...IMPORTS_BASE_MODULES,
    ...IMPORTS_NGB_MODULES,
    ...IMPORTS_SHARED_MODULE,
  ],
  providers: [
  ],
  exports: [
    ...EXPORTS_BASE_MODULES,
    ...EXPORTS_NGB_MODULES,
    ...EXPORTS_SHARED_MODULE,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
