
  import { Component, OnInit } from '@angular/core';

import { Conseiller } from '../../conseiller/conseiller';
  
  interface NavItem {
    text: string;
    path: string;
  }
  
  
  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
  })
  
  export class NavbarComponent implements OnInit {
  
    logo:String = '/assets/Proxibanque.jpg';
    user: Conseiller
    
    navItems: NavItem[]=[
      {text:'Accueil', path:'home'},
    ];
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }



