import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }


  loadClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients');
  }

  loadClient(clientId: number): Observable<Client> {
    return this.http.get<Client>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' + clientId);
  }

  saveClient(client: Client): Observable<Client> {
   
      return this.http.put<Client>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' , client);
  }
  editClient(client: Client): Observable<Client> {
      return this.http.post<Client>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' , client);
    
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' + clientId);
  }
}
