import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarkComponent } from './landmark/landmark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandmarkForumComponent } from './landmark-forum/landmark-forum.component';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarkComponent,
    LandmarkForumComponent,
    LandmarkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
