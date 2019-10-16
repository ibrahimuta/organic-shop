import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    firebase.database()
      .ref('/users/' + user.uid)
      .update({
        name: user.displayName,
        email: user.email
      });
  }

   get(uid: string) {
    return this.db.object('/users/' + uid).valueChanges() as Observable<AppUser>;
  }
}
