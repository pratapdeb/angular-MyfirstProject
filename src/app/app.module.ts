import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BannerComponent} from '../app/banner/banner.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,NgbModule],
  declarations: [ AppComponent, HelloComponent,BannerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
