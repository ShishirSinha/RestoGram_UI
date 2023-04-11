declare let google: any;

import { Component, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { accounts } from 'google-one-tap';
import { DataService } from 'src/app/services/data.service';
import { constants } from 'src/app/app.constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  userName = new FormControl('');
  password = new FormControl('');


  constructor(private ngZone: NgZone, private dataService: DataService) { }

  ngOnInit() {

    const gAccounts: accounts = google.accounts;

    gAccounts.id.initialize({
      client_id: '296952359317-fvq565uciuhj4r3brgnrknuu492dubgn.apps.googleusercontent.com',
      ux_mode: 'popup',
      cancel_on_tap_outside: true,
      callback: ({ credential }) => {
        this.ngZone.run(() => {
          this._loginWithGoogle(credential);
        });
      },
    });

    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("google-button"),
      { theme: "outline", size: "large", width: 320 }
    );
  }

  private _loginWithGoogle(token: string) {
    console.log("url ->", environment.baseUrl)
    this.dataService.postDataApi(environment.baseUrl + constants.JWT_TOKEN_URL, { token: token })
      .subscribe(res => {
        console.log("res ->", res)
      }, err => {
        console.error(err);
      })
  }

}
