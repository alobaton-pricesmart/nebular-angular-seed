import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const IMPORTS_BASE_MODULES = [
  BrowserModule,
];

const IMPORTS_APP_MODULES = [
  CoreModule,
  AppRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...IMPORTS_BASE_MODULES,
    ...IMPORTS_APP_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
