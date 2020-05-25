import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit() {}

  googleLogin() {
    this.auth.googleSignin()
    .then(() => {
      this.ngZone.run(() => this.router.navigate(['']));
    });
  }
}
