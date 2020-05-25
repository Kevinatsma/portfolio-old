import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { AuthService } from './../../auth.service';
import { User } from './../../../shared/models/user.model';
import { UtilsService } from './../../../shared/utils/utils.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', './../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  user$: Observable<User>;
  user: User;

  succesVisible = true;
  capsOn: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      this.user = user;
    });
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  // Getters
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  googleLogin() {
    this.auth.googleSignin()
    .then(() => {
      if (this.auth.user$) {
        this.router.navigate(['']);
        console.log('You don\'t have all necessary data yet..');
      } else {
        alert('Woops, you\'re not logged in. Try again!');
      }
    });
  }

  toggleStepOverlay() {
    this.succesVisible = !this.succesVisible;
  }

  // Misc

  getState(o) {
    return o.activatedRouteData.state;
  }

  @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capsOn.next(true);
      } else {
      this.capsOn.next(false);
      }
    }

    @HostListener('window:keyup', ['$event'])
    onKeyUp(event) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capsOn.next(true);
    } else {
      this.capsOn.next(false);
    }
  }
}
