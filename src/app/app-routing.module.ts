import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandmarkComponent } from './landmark/landmark.component';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { TrendingListComponent } from './trending-list/trending-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'landmarks',component: LandmarkListComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,
  canActivate:[AuthGuard]},
  {path:'trending', component: TrendingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
 }

 
