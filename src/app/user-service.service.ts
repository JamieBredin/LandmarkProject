import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public auth: AuthService) { }
  user$ = this.auth.user$;
  public userID!:String|undefined
  getUserID()
  {
    this.auth.user$.subscribe(user => {
      console.log(user);
      this.userID = user?.sub?.toString();
  });
  return this.userID
}
}
