import { Component, OnInit } from '@angular/core';

import { CompteService } from '../compte.service';
import { CompteEpargne } from '../compte epargne/compte epargne';
import { CompteCourant } from '../compte courant/compte courant';
import { Client } from '../../client/client';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',

})
export class CompteListComponent implements OnInit {

  compteEpargnes: CompteEpargne[] = [];
  compteCourants: CompteCourant[] = [];
  client: Client;
  clients: Client[];
  // listeComptes:Compte[];

  constructor(private compteService: CompteService, private clientService: ClientService) { }

  // ngOnInit() {
  // this.compteService.loadCompteCourants(this.client).subscribe(compteCourants => this.compteCourants = compteCourants);
  // this.compteService.loadCompteEpargnes(this.client).subscribe(compteEpargnes => this.compteEpargnes = compteEpargnes);
  // }

  ngOnInit() {
    this.clientService.loadClients().subscribe(clients => this.clients = clients);
  }

  loadComptes() {
    this.clientService.loadClients().subscribe(clients => this.clients = clients);
    this.ngOnInit();
  }

  loadCompte(clientId: number) {
    // loadClient(clientId: number, options:any) {
    // this.option=options;  //Récupération du choix (editer ou voir)
    this.clientService.loadClient(clientId).subscribe();
    this.ngOnInit();
  }

  // loadCompteCourants() {
  //   this.compteService.loadCompteCourants(this.client).subscribe(compteCourants => this.compteCourants = compteCourants);
  //   this.ngOnInit();
  // }

  // loadCompteEpargnes() {
  //   this.compteService.loadCompteEpargnes(this.client).subscribe(compteEpargnes => this.compteEpargnes = this.compteEpargnes);
  //   this.ngOnInit();
  // }


  // loadComptes() {
  //     this.compteService.loadComptes(this.client).subscribe(compteEpargnes => this.compteEpargnes = this.compteEpargnes);
  //     this.ngOnInit();
  //   }

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

//   deleteCompteEpargne(compteEpargne: CompteEpargne) {
//     this.compteService.deleteCompteEpargne(this.client).subscribe();
//     this.ngOnInit();
//     alert('Compte Epargne n°' + compteEpargne + ' effacé');
//   }
}