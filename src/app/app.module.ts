import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { PaisModule } from './Pais/pais.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  //en imports siempre iran los modulos compartidos de los componentes en este caso el shared modulo y el paismodule, esta manera aplicamos la modularizacion
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
