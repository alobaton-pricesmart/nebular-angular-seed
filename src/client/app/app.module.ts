import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';



const IMPORTS_BASE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
];

const EXPORTS_BASE_MODULES = [
  BrowserAnimationsModule,
];

const IMPORTS_APP_MODULES = [
  CoreModule,
  AppRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
  TranslateModule.forRoot(),
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...IMPORTS_BASE_MODULES,
    ...IMPORTS_APP_MODULES,
  ],
  exports: [
    ...EXPORTS_BASE_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
