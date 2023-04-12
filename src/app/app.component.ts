import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userRoleToken?: string
  title = 'landmarkProject';
  isAuthenticated$ = this.auth.isAuthenticated$
  public userID!:String |undefined
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService,private router: Router)
  {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.getIdTokenClaims().subscribe((idToken) => {
          console.log('JWT Token:', idToken!['user/roles'][0]);
         this.userRoleToken = idToken!['user/roles'][0];

        });
      }
    });
  }
clickME()
{
  console.log("this is my role *flips table " + this.userRoleToken);
}
  handleLogout() {
    this.auth.logout()
  }
  
  handleLogin() {
    this.auth.loginWithRedirect({appState: { target: '/profile',}})
  }
  handleSignUp() {
    this.auth.loginWithRedirect({screen_hint:"signup"})
  }

}


