import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gerant } from '../gerant';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-gerant-login',
  templateUrl: './gerant-login.component.html',
  styles: []
})

export class GerantLoginComponent implements OnInit {
  // Component state
  isLoading = true;
  currentUser: Gerant;

  userLogin = '/assets/UserLogin.jpg';

  constructor(private router: Router,
    private authService: AuthService) { }

  // Redirect the user to the Home page clicking on cancel.
  gotoHome(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.isLoading = false;
      },
        error => {
          this.isLoading = false;
        });
  }

  // doLogin() {
  //   this.authService.signIn().
  //   subscribe(user => {
      // if (user) {
  //       this.gotoAdmin();
  //     }
  //   });
  // }

  doLogin() {
    this.authService.signIn().subscribe(user => {
        if (user.login=='bobo' && user.password=='12345') {
          // if (user) {
          this.gotoAdmin();
        } else {
          this.gotoHome();
        }
  })}


  // doLogout() {
  //   this.authService.signOut()
  //     .subscribe(() => {
  //       alert('Vous êtes déconnecté(e).');
  //     });
  // }

  // Redirect the user to the admin homepage.
  gotoAdmin(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['conseillers']);
  }
}

