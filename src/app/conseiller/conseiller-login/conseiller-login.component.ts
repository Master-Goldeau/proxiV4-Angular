import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller-login',
  templateUrl: './conseiller-login.component.html',
 })
export class ConseillerLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
