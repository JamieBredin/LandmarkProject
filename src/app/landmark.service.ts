import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Landmark } from './landmark';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {
public dataUri = `${environment.apiUri}/landmarks`;
  constructor(private http: HttpClient) { }

  getLandmarks():Observable<Landmark[]>{
    console.log("get landmarks called");

    //return this.http.get<Landmark[]>(`${this.dataUri}`)
    return this.http.get<Landmark[]>(`${this.dataUri}`).pipe(
      tap((response) => {
        console.log("API response in LandmarkService:", response);
      }),
      catchError(this.handleError)
    );
  }
  addLandmark(landmark: Landmark): Observable<Landmark>{
    return this.http.post<Landmark>(this.dataUri, landmark)
    .pipe(
      catchError(this.handleError)
    )
  }
  updateLandmark(id: string, landmark: Landmark): Observable<Landmark>{
    console.log('subscibing to update ' + id);
    let landmarkURI: string = this.dataUri + '/' +id;
    return this.http.put<Landmark>(landmarkURI, landmark)
    .pipe(
      catchError(this.handleError)
    )
  }
  deleteLandmark(id: string): Observable<unknown>{
    const url=`${this.dataUri}/${id}`;
    return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
