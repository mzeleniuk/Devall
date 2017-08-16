import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
