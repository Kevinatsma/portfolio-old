import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../shared/models/user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.initUser();
    this.afAuth.authState.subscribe(data => this.authState = data);
  }

  // Get the auth state, then fetch the Firestore user document or return null
  initUser() {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        const id = _.get(user, 'uid');
        return user
          ? this.afs.doc<User>(`users/${id}`).valueChanges()
          : of(null);
      })
    );
  }

  // Quick handy getters
  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  // Login with Google
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  // Update user
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        user: true,
        mod: false,
        admin: false
      },
    };
    return userRef.set(data, { merge: true });
  }

  // Password Reset
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error));
  }

  // Check for roles
  userRole(user: User): boolean {
    const allowed = ['admin', 'specialist', 'client'];
    return this.checkAuthorization(user, allowed);
  }

  modRole(user: User): boolean {
    const allowed = ['admin', 'specialist'];
    return this.checkAuthorization(user, allowed);
  }

  adminRole(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }

  // Sign out
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
