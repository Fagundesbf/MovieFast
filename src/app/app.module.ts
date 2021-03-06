import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


// COMPONENTS
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  exports:[
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
