import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller.service';
import { Conseiller } from '../conseiller';
import { Compte } from '../../compte/compte';
// import { Router, ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../../client/client';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html'
})
export class AuditComponent implements OnInit {
  comptes: Compte[];
  conseillers:Conseiller[];
  constructor(private conseillerService: ConseillerService, private router : Router) { }

  ngOnInit() {

  }
  audit() {
    // this.router.navigate(['audit']);
    this.conseillerService.audit().subscribe(comptes =>  this.comptes = comptes );
  }

}
