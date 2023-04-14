import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Landmark } from './landmark';

@Injectable({
  providedIn: 'root'
})
export class DummyLandmarkService {

  constructor() { }

  
//   private dummyLandmarksData : Landmark[] = [{"_id":"61643ac437689140c4239e5f",
//   "xCoordinates":1,"yCoordinates":2,"zCoordinates":3,"countryName":"Ireland","landmarkName":"5 Fingers of Cavan","townName":"Cavan","countryCaptial":"Dublin","notes":"Brilliant place would go again"},
//   {"_id":"12342324","xCoordinates":6,"yCoordinates":4,"zCoordinates":7,"countryName":"England","landmarkName":"Big Ben","townName":"London","countryCaptial":"London","notes":"Massive Clock of England"},
//   {"_id":"87234780324","xCoordinates":3,"yCoordinates":5,"zCoordinates":8,"countryName":"Ireland","landmarkName":"The Royal TF","townName":"Mayo","countryCaptial":"Dublin","notes":"Seen Foil arms and hog here"  
// }]

//   getLandmarks(): Observable<Landmark[]>{
//     console.log('Dummy getLandmarks called');

//     return of(this.dummyLandmarksData);
//   }
}
