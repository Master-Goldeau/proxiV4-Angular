import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {

  listeClients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.loadClients().subscribe(clients => this.listeClients = clients);
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId).subscribe();
    this.ngOnInit();
    alert('Client n°' + clientId + 'effacé');
  }

  loadClients() {
    this.clientService.loadClients().subscribe(clients => this.listeClients = clients);
    this.ngOnInit();
  }

  loadClient(clientId: number) {
    this.clientService.loadClient(clientId).subscribe();
    this.ngOnInit();
  }

  newClient(client: Client) {
    this.clientService.saveClient(client).subscribe();
    this.ngOnInit();
    alert('Client' + client + 'enregistré');
  }

}