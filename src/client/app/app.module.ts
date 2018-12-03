import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

=======
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> Integrate translate service to lang service

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
  CoreModule,
  AppRoutingModule,
<<<<<<< HEAD
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
  TranslateModule.forRoot(),
=======
  ThemeModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }),
>>>>>>> Integrate translate service to lang service
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
