import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afauth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = this.afauth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afauth.auth.signOut();
  }

  get appUser$() {
    return this.user$.pipe(
      switchMap(user => {
        if (user) { return this.userService.get(user.uid); }

        return of(null);
      })
    );
  }

}
