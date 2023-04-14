import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LandmarkService } from './landmark.service';
import { Landmark } from './landmark';


describe('LandmarkService', () => {
  let service: LandmarkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LandmarkService],
    });
    service = TestBed.inject(LandmarkService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Previous test for getLandmarks() method

  describe('addLandmark()', () => {
    it('should add a new landmark', () => {
      const newLandmark: Landmark = {
        _id:'1',
        countryName: 'Test Landmark',
        landmarkName: 'Test Description',
        cityName: 'Test City',
        notes: 'Test Notes',
        userID: 'Test User'
      };
      service.addLandmark(newLandmark).subscribe((response) => {
        expect(response).toEqual(newLandmark);
      });
      const req = httpMock.expectOne(service.dataUri);
      expect(req.request.method).toBe('POST');
      req.flush(newLandmark);
    });
  });

  describe('updateLandmark()', () => {
    it('should update an existing landmark', () => {
      const updatedLandmark: Landmark = {
        _id:'1',
        countryName: 'Tested Landmark',
        landmarkName: 'Tested Description',
        cityName: 'Tested City',
        notes: 'Tested Notes',
        userID: 'Tested User'
      };
      service.updateLandmark('1', updatedLandmark).subscribe((response) => {
        expect(response).toEqual(updatedLandmark);
      });
      const req = httpMock.expectOne(`${service.dataUri}/1234`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedLandmark);
    });
  });

  describe('deleteLandmark()', () => {
    it('should delete an existing landmark', () => {
      service.deleteLandmark('1').subscribe((response) => {
        expect(response).toBeNull();
      });
      const req = httpMock.expectOne(`${service.dataUri}/1234`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });
});
