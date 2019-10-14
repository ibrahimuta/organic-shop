import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor() { }

  login() {
    this.user$ = Observable.create(observer => {
      observer.next({ token: 'abc', displayName: 'Ibrahim Khaleelullah' });
      observer.complete();
    });
    return this.user$;
  }

  logout() {
    this.user$ = null;
  }

}
