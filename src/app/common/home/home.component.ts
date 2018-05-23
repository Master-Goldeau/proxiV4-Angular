import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  Proxibanque = '/assets/Proxibanque.jpg';


  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Redirect the user to the gerant loginpage.
  gotoGerant(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['gerant-login']);
  }

// Redirect the user to the Conseiller loginpage.

gotoConseiller(event?: Event) {
  if (event) { event.preventDefault(); }
  this.router.navigate(['conseiller-login']);
}
}
