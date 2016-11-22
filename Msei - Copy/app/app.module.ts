import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { AppComponent }   from './app.component';
import {HeaderSection} from './header/app.header.component'
import {FooterSection} from './footer/app.footer.component'

import {service} from './app.component.service'
@NgModule({
  imports:      [ BrowserModule,HttpModule],
  providers:[service],
  declarations: [ AppComponent,HeaderSection,FooterSection],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


 }
