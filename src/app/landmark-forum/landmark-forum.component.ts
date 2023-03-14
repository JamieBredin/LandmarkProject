import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Landmark } from '../landmark';
import { LandmarkService } from '../landmark.service';

@Component({
  selector: 'app-landmark-forum',
  templateUrl: './landmark-forum.component.html',
  styleUrls: ['./landmark-forum.component.css']
})
export class LandmarkForumComponent implements OnInit {

  constructor(private landmarkService : LandmarkService) { }
  landmarkForm : FormGroup = new FormGroup({});
  message: String = ''
  @Input() landmark?: Landmark

  ngOnInit(): void {
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
   // console.log(this.landmarkName)
   console.log("THE ID: "+this.landmark?._id)
    if(this.landmark?._id == null)
    {
      this.addNewLandmark(this.landmarkForm?.value)
    }
    else
    {
      this.updateCurrentLandmark(this.landmark._id,this.landmarkForm?.value)
    }
  }

  get landmarkName()
  {
    return this.landmarkForm.get('landmarkName')?.value
  }
  
// -----------------
loadEditData(id:string)
{
  console.log(id);
}
//------------------

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
        window.location.reload();
      },
      error: (err) => this.message = err
    });}
  }



