import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent, MainComponent, InfoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
