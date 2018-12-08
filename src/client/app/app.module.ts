import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const IMPORTS_BASE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
];

const EXPORTS_BASE_MODULES = [
  BrowserAnimationsModule,
];

const IMPORTS_APP_MODULES = [
  CoreModule.forRoot(),
  AppRoutingModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
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
