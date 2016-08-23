import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule,HTTP_PROVIDERS }     from '@angular/http';

import { FeathersService } from "./services/feathers.service";

import { AppComponent }  from './components/app/app.component';
import { LogsComponent } from "./components/logs/logs.component";



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
    FeathersService,
    HTTP_PROVIDERS
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
