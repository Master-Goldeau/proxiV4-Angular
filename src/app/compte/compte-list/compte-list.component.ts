import { Component, OnInit } from '@angular/core';

import { CompteService } from '../compte.service';
import { CompteEpargne } from '../compte epargne/compte epargne';
import { CompteCourant } from '../compte courant/compte courant';
import { Client } from '../../client/client';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',

})
export class CompteListComponent implements OnInit {

  compteEpargnes: CompteEpargne[] = [];
  compteCourants: CompteCourant[] = [];
  client: Client;

  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.loadCompteCourants(this.client).subscribe(compteCourants => this.compteCourants = compteCourants);
    this.compteService.loadCompteEpargnes(this.client).subscribe(compteEpargnes => this.compteEpargnes = compteEpargnes);
  }

  loadCompteCourants() {
    this.compteService.loadCompteCourants(this.client).subscribe(compteCourants => this.compteCourants = compteCourants);
    this.ngOnInit();
  }

  loadCompteEpargnes() {
    this.compteService.loadCompteEpargnes(this.client).subscribe(compteEpargnes => this.compteEpargnes = this.compteEpargnes);
    this.ngOnInit();
  }



  // loadCompteCourant(numCompteCourant: number) {
  //   // loadClient(clientId: number, options:any) {
  //   // this.option=options;  //Récupération du choix (editer ou voir)
  //   this.compteService.loadCompteCourant(numCompteCourant).subscribe();
  //   this.ngOnInit();
  // }

  // loadCompteEpargne(numCompteEpargne: number) {
  //   // loadClient(clientId: number, options:any) {
  //   // this.option=options;  //Récupération du choix (editer ou voir)
  //   this.compteService.loadCompteEpargne(numCompteEpargne).subscribe();
  //   this.ngOnInit();
  // }

  // newCompteEpargne(compteEpargne: CompteEpargne) {
  //   this.compteService.saveCompteEpargne(this.client).subscribe();
  //   this.ngOnInit();
  //   alert('Compte Epargne' + compteEpargne + 'enregistré');
  // }

  deleteCompteEpargne(compteEpargne: CompteEpargne) {
    this.compteService.deleteCompteEpargne(this.client).subscribe();
    this.ngOnInit();
    alert('Compte Epargne n°' + compteEpargne + ' effacé');
  }
}