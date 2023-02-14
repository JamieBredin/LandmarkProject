import { Component, Input, OnInit } from '@angular/core';
import { Landmark } from '../landmark';
import { LandmarkService } from '../landmark.service';

@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css']
})
export class LandmarkListComponent implements OnInit {
  landmarks: Landmark[] = [];
  message: String = ''
  constructor(private landmarkService : LandmarkService) { }
  @Input() landmark!: Landmark;

  ngOnInit(): void {
    this.landmarkService.getLandmarks().subscribe({
      next: (value: Landmark[]) => this.landmarks = value,
      complete: () => console.log('landmark service finished'),
      error: (message) => this.message = message
  })
}
}
