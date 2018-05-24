import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',

})

export class ClientListComponent implements OnInit {

  clients: Client[];
  // option:any;

  constructor(private clientService: ClientService, private router : Router) { }

  ngOnInit() {
    this.clientService.loadClients().subscribe(clients => this.clients = clients);
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId).subscribe();
    this.ngOnInit();
    alert('Client effacé');
  }

  loadClients() {
    this.clientService.loadClients().subscribe(clients => this.clients = clients);
    this.ngOnInit();
  }

  loadClient(clientId: number) {
    // loadClient(clientId: number, options:any) {
    // this.option=options;  //Récupération du choix (editer ou voir)
    this.clientService.loadClient(clientId).subscribe();
    this.ngOnInit();
  }

  newClient(client: Client) {
    this.clientService.saveClient(client).subscribe();
    this.ngOnInit();
    alert('Client' + client + 'enregistré');
  }
  // virement() {
  //   this.router.navigate(['virement']);
  // }
}
