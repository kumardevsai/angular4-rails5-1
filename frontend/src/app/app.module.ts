import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { InfoComponent } from './components/info/info.component';
import { BlogComponent } from './components/blog/blog.component';
import { EvenPipe } from './pipes/even.pipe';

@NgModule({
  declarations: [
    AppComponent, MainComponent, InfoComponent, BlogComponent, EvenPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
