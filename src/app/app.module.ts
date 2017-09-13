import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdSnackBarModule,
  MdCardModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  MdListModule,
  MdPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    FooterComponent,
    UserInfoComponent
  ],
  entryComponents: [
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSnackBarModule,
    MdCardModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdListModule,
    MdPaginatorModule
  ],
  providers: [SearchUsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
