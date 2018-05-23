import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerant-login',
  templateUrl: './gerant-login.component.html',
  })
export class GerantLoginComponent implements OnInit {

  userLogin = '/assets/Userlogin.jpg';

  constructor(private router:Router) { }

  // Redirect the user to the Home page clicking on cancel.
  gotoHome(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
