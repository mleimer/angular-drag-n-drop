import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicComponent } from './drag-n-drop/basic/basic.component';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import { AdvancedComponent } from './drag-n-drop/advanced/advanced.component';
import { InfiniteListsComponent } from './drag-n-drop/infinite-lists/infinite-lists.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdvancedComponent,
    InfiniteListsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
