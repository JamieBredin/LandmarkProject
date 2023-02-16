import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    this.landmarkForm = new FormGroup({
    xCoordinates: new FormControl (''),        
    yCoordinates: new FormControl (''),
    zCoordinates: new FormControl(''),
    countryName: new FormControl(''),
    landmarkName: new FormControl(''),
    townName: new FormControl(''),
    countryCaptial: new FormControl(''),
    notes: new FormControl('')
})
  }
  
  onSubmit(){
    console.log('got here')
    console.log('forms submitted with: ');
    console.table(this.landmarkForm?.value);
    //if(id == null)
    //{
      this.addNewLandmark(this.landmarkForm?.value)
    //}
    // else{
    //   this.updateCurrentLandmark(id,this.landmarkForm?.value)
    // }
    //this.landmarkFormClose.emit(this.landmarkForm?.value);
  }


  @ViewChild(LandmarkForumComponent) addView !:LandmarkForumComponent


updateLandmark(id:string)
{
  this.showModal=true;
  console.log(id);
  //console.log(this.addView);
  //this.addView.loadEditData(id);
}



  addNewLandmark(newLandmark:Landmark):void{
    console.log('adding new landmark ' + JSON.stringify(newLandmark));
    this.landmarkService.addLandmark({ ...newLandmark})
    .subscribe({
      next: landmark => {
        console.log(JSON.stringify(landmark) + ' has been added');
        this.message = "new landmark has been added";
      },
      error: (err) => this.message =err
    });
    // so the updated list appears
    this.ngOnInit();
    window.location.reload();

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


updateCurrentLandmark(id: string, landmark: Landmark): void {
  console.log('updating ');
  console.table (landmark);
  this.landmarkService.updateLandmark(id, landmark)
    .subscribe({
      next: landmark => {
        console.log(JSON.stringify(landmark) + ' has been updated');
        this.message = " landmark has been updated";
        //this.currentlandmark = undefined;
        this.ngOnInit();
      },
      error: (err) => this.message = err
    });
}
}
