import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Conseiller } from '../conseiller';




@Component({
  selector: 'app-conseiller-login',
  templateUrl: './conseiller-login.component.html'
})
export class ConseillerLoginComponent implements OnInit {
  // Component state
  isLoading = true;
  currentUser: Conseiller;

  constructor(private router: Router,
              private authService: AuthService) {
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

  doLogin() {
    this.authService.signIn()
      .subscribe(user => {
        if (user) {
          this.gotoAdmin();
        }
      });
  }

  doLogout() {
    this.authService.signOut()
      .subscribe(() => {
        alert('Vous êtes déconnecté(e).');
      });
  }

  // Redirect the user to the admin homepage.
  gotoAdmin(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['conseiller-login']);
  }
}

