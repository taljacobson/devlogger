import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { FeathersService } from "./services/feathers.service";

import { AppComponent }  from './components/app/app.component';
import { LogsComponent } from "./components/log/log.component";



@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    LogsComponent
  ],
  providers: [
    FeathersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
