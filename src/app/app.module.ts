import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarkComponent } from './landmark/landmark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandmarkForumComponent } from './landmark-forum/landmark-forum.component';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';
import {AuthModule, AuthHttpInterceptor} from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarkComponent,
    LandmarkForumComponent,
    LandmarkListComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({...environment.auth0,
    httpInterceptor:{
      allowedList: [`${environment.apiUri}/landmarks`],
    },})

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi:true,},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
