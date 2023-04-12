import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DummyLandmarkService } from '../dummy-landmark.service';
import { Landmark } from '../landmark';
import { LandmarkForumComponent } from '../landmark-forum/landmark-forum.component';
import { LandmarkService } from '../landmark.service';

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.css']
})
export class LandmarkComponent implements OnInit {
  public tempLanmark !: Landmark;
  landmarks: Landmark[] = [];
  message: String = ''
 showModal:  Boolean = false
  @Input() landmark!: Landmark;
  //@Output() landmarkFormClose = new EventEmitter<Landmark>();
  landmarkForm : FormGroup = new FormGroup({});
  currentLandmark! : Landmark;
  currentID: String=''
    constructor(private landmarkService : LandmarkService) { }

  ngOnInit(): void {
  this.currentID=this.landmark._id

  }

updateLandmark()
{
  this.showModal=true;
}
changeBool()
{
  this.showModal=false;
}

deleteCurrentLandmark(id:string)
{
  console.log("Deleting Landmark");
  this.landmarkService.deleteLandmark(id)
  .subscribe({
    next: landmark => {
      console.log(JSON.stringify(landmark) + ' has been deleted');
      this.message = "landmark has been successfully deleted";
    },
    error: (err) => this.message = err
  });
  this.ngOnInit();
  window.location.reload();
}


}
