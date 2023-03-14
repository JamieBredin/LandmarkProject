import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  //@Input() landmark!: Landmark;
  landmarkForm : FormGroup = new FormGroup({});
  landmarkTemp !: Landmark;

  ngOnInit(): void {
    this.landmarkService.getLandmarks().subscribe({
      next: (value: Landmark[]) => this.landmarks = value,
      complete: () => console.log('landmark service finished'),
      error: (message) => this.message = message
})
}

ReadMore:boolean = true

//hiding info box
visible:boolean = false
formVisible:boolean = true



//onclick toggling both
onclick()
{
  this.ReadMore = !this.ReadMore; //not equal to condition
  this.visible = !this.visible
  this.formVisible = !this.formVisible
}
}
