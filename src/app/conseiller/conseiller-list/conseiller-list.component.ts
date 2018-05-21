import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../conseiller';
import { ConseillerService } from '../conseiller.service';

@Component({
  selector: 'app-conseiller-list',
  templateUrl: './conseiller-list.component.html',

})

export class ConseillerListComponent implements OnInit {

  listeConseillers: Conseiller[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.conseillerService.loadConseillers().subscribe(conseillers => this.listeConseillers = conseillers);
  }

  // deleteConseiller(conseillerId: number) {
  //   this.conseillerService.deleteConseiller(conseillerId).subscribe();
  //   this.ngOnInit();
  //   alert('Conseiller n°' + conseillerId + 'effacé');
  // }

  loadConseillers() {
    this.conseillerService.loadConseillers().subscribe(conseillers => this.listeConseillers = conseillers);
    this.ngOnInit();
  }

  loadConseiller(conseillerId: number) {
    this.conseillerService.loadConseiller(conseillerId).subscribe();
    this.ngOnInit();
  }

  // newConseiller(conseiller: Conseiller) {
  //   this.conseillerService.saveConseiller(conseiller).subscribe();
  //   this.ngOnInit();
  //   alert('Conseiller' + conseiller + 'enregistré');
  // }

}
