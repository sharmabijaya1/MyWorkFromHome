import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { AppComponent }   from './app.component';
import {HeaderSection} from './header/app.header.component'
import {FooterSection} from './footer/app.footer.component'
import {ContentSection} from './contentbody/app.contentbody.component'

import {service} from './app.component.service'
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  providers:[service],
  declarations: [ AppComponent,HeaderSection,FooterSection,ContentSection],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


 }
