import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicComponent } from './drag-n-drop/basic/basic.component';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import { AdvancedComponent } from './drag-n-drop/advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdvancedComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
