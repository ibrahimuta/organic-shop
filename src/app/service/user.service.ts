import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  save(user: firebase.User) {
    firebase.database()
      .ref('/users/' + user.uid)
      .update({
        name: user.displayName,
        email: user.email
      });
  }
}
