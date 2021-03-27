import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityModule } from './security/security.module';
import { HttpErrorHandler } from './helpers/http-error-handler';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { AuthService } from './services/auth/auth.service';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const IMPORTS_BASE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
];

const EXPORTS_BASE_MODULES = [
  BrowserAnimationsModule,
];

const IMPORTS_APP_MODULES = [
  SecurityModule.forRoot(),
  CoreModule.forRoot(),
  AppRoutingModule,
];

const EXPORTS_APP_MODULES = [
  SecurityModule,
];

const APP_MODULE_PROVIDERS = [
  HttpErrorHandler,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
  AuthService,
  { provide: LOCALE_ID, useValue: 'es' }
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
    ...EXPORTS_APP_MODULES,
  ],
  providers: [...APP_MODULE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
