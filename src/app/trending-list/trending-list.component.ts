import { Component, OnInit } from '@angular/core';
import { Landmark } from '../landmark';
import { LandmarkService } from '../landmark.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.css']
})
export class TrendingListComponent implements OnInit {
  landmarks: Landmark[] = [];
  message: String = ''
  currentUserID!:String|undefined
  currentUserRole!:String|undefined
  landmarkTemp !: Landmark;
  constructor(private landmarkService : LandmarkService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.currentUserID = this.userService.getUserID();
    this.currentUserRole= this.userService.getUserRole();
    console.log("User ID = " + this.currentUserID?.toString())
    this.landmarkService.getLandmarks().subscribe({
      next: (value: Landmark[]) => this.landmarks = value,
      complete: () => console.log('landmark service finished'),
      error: (message) => this.message = message
  })}
  
}
