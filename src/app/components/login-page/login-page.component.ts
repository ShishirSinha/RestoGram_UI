import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  userName = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() { }

  loginClicked() {
    let userNameValue = this.userName.value;
    let passwordValue = this.password.value;

  }

}
