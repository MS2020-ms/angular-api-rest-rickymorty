//importar HttpClientModule
//(buscar https://angular.io/api/common/http/HttpClientModule -> @angular/common/http)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],

  //importar HttpClientModule
  //HttpClient para hacer llamadas a una API REST
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
