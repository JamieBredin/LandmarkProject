import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null)));

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      console.log(user);
     // console.log(user['https://your-auth0-namespace/roles']);
    });
  }

}
