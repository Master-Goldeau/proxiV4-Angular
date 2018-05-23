import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  
})
export class CompteListComponent implements OnInit {

  listeComptes: Compte[];

  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.loadComptes().subscribe(comptes => this.listeComptes = comptes);
  }

  loadComptes() {
    this.compteService.loadComptes().subscribe(comptes => this.listeComptes = comptes);
    this.ngOnInit();
  }

  loadCompte(compteId: number) {
    this.compteService.loadCompte(compteId).subscribe();
    this.ngOnInit();
  }

  newCompte(compte: Compte) {
    this.compteService.saveCompte(compte).subscribe();
    this.ngOnInit();
    alert('Compte' + compte + 'enregistré');
  }

   // deleteClient(clientId: number) {
  //   this.clientService.deleteClient(clientId).subscribe();
  //   this.ngOnInit();
  //   alert('Client n°' + clientId + ' effacé');
  // }
}