import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  userFromUrl: User = {
    username: "Test User",
    user_id: "1",
    address: "Test Address",
    email: "test@gmail.com",
    date_of_birth: new Date(),
  };
  currentUser: User;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params["id"]) {
        let userFound = this.userFromUrl.user_id == params["id"] ? this.userFromUrl : null;
        if (userFound) 
          this.currentUser = userFound;
        else 
          this.router.navigate(["/login"]);
      }
    })
  }

}
