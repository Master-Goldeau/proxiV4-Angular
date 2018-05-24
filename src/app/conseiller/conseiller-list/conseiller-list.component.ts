import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller';
import { ConseillerService } from '../conseiller.service';
import { Compte } from '../../compte/compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller-list',
  templateUrl: './conseiller-list.component.html',

})

export class ConseillerListComponent implements OnInit {
  comptes: Compte[];
  conseillers: Conseiller[];
  constructor(private conseillerService: ConseillerService, private router : Router) { }

  ngOnInit() {
    this.conseillerService.loadConseillers().subscribe(conseillers => this.conseillers = conseillers);
  }

  // deleteConseiller(conseillerId: number) {
  //   this.conseillerService.deleteConseiller(conseillerId).subscribe();
  //   this.ngOnInit();
  //   alert('Conseiller n°' + conseillerId + 'effacé');
  // }

  loadConseillers() {
    this.conseillerService.loadConseillers().subscribe(conseillers => this.conseillers = conseillers);
    this.ngOnInit();
  }

  loadConseiller(conseillerId: number) {
    this.conseillerService.loadConseiller(conseillerId).subscribe();
    this.ngOnInit();
  }

  audit1() {
    this.router.navigate(['audit']);
    // this.conseillerService.audit().subscribe(comptes =>  this.comptes = comptes );
  }
 



  // newConseiller(conseiller: Conseiller) {
  //   this.conseillerService.saveConseiller(conseiller).subscribe();
  //   this.ngOnInit();
  //   alert('Conseiller' + conseiller + 'enregistré');
  // }

}
