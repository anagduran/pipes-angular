
//MODULOS PERSONALIZADO
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//CAMBIAR EL LOCALE DE LA APP
import localeEs from '@angular/common/locales/es-VE';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEs)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-VE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
