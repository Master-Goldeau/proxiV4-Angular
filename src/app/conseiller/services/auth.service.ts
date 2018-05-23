// /**
//  * @file
//  * Dummy cookie-based auth.
//  * Authenticating just means setting a 'conseiller' cookie. No password required.
//  */
// import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

// import { Observable } from 'rxjs/Observable';
// import { ReplaySubject } from 'rxjs/ReplaySubject';
// import 'rxjs/add/observable/of';
// import { Conseiller } from '../conseiller';



// @Injectable()
// export class AuthService {
//   private userObs = new ReplaySubject<Conseiller>(1);
//   private isLoggedInObs = new ReplaySubject<boolean>(1);

//   constructor(@Inject(DOCUMENT) private document) {
//     this.checkCurrentUser();
//   }

//   getCurrentUser(): Observable<Conseiller> {
//     return this.userObs.asObservable();
//   }

//   isLoggedIn(): Observable<boolean> {
//     return this.isLoggedInObs.asObservable();
//   }

//   /**
//    * Check if we already have a current user (cookie).
//    */
//   checkCurrentUser() {
//     let user;
//     const userCookie = this.getCookie('user');
//     if (userCookie) {
//       const userData = JSON.parse(userCookie);
//       user = new Conseiller(userData);
//     }
//     this.userObs.next(user);
//     this.isLoggedInObs.next(!!user);
//   }

//   signIn(): Observable<Conseiller> {
//     const userData = {name: 'Bob', login: 'bob'};
//     this.setCookie('user', JSON.stringify(userData));
//     this.checkCurrentUser();
//     return Observable.of(new Conseiller(userData));
//   }

//   signOut(): Observable<any> {
//     // console.log('deleteCookie');
//     this.deleteCookie('user');
//     this.checkCurrentUser();
//     return Observable.of(undefined);
//   }

//   //
//   // Private methods
//   //

//   private setCookie(name: string, value: string) {
//     this.document.cookie = `${name}=${value}`;
//   }

//   /**
//    * Quick & dirty way to extract a specific cookie
//    * from the cookie string.
//    *
//    * Cookie string format: "name=Vince; foo=bar"
//    */
//   private getCookie(name: string = ''): string {
//     const allCookiesString = this.document.cookie;
//     const index1 = allCookiesString.indexOf(name);
//     if (index1 !== -1) {
//       let index2 = allCookiesString.indexOf(';', index1);
//       index2 = index2 === -1 ? allCookiesString.length : index2;
//       const cookieString = allCookiesString.slice(index1, index2);
//       return cookieString.split('=')[1];
//     }
//   }

//   deleteCookie(name: string) {
//     this.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
//   }
// }
