import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CompteCourant } from './compte courant/compte courant';
import { CompteEpargne } from './compte epargne/compte epargne';
import { Client } from '../client/client';


@Injectable()
export class CompteService {

  constructor(
    private http: HttpClient
  ) { }


  // loadComptes(): Observable<Client[]> {
  //   return this.http.get<Client[]>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients');
  // }

  loadCompte(clientId: number): Observable<Client> {
    return this.http.get<Client>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' + clientId);
  }

  // loadCompteCourants(client: Client): Observable<CompteCourant[]> {
  //   return this.http.get<Client>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/clients/' + clientId);
  // }

  // loadCompteEpargnes(client: Client): Observable<CompteEpargne[]> {
  //   return this.http.get<CompteEpargne[]>('http://localhost:3004/clients' + client.id);
  // }


  // loadCompteCourant(numCompteCourant: number): Observable<CompteCourant> {
  //   return this.http.get<CompteCourant>('http://localhost:3004/clients/' + client.id, client.numCompteCourant );
  // }

  // loadCompteEpargne(numCompteEpargne: number): Observable<CompteEpargne> {
  //   return this.http.get<CompteEpargne>('http://localhost:3004/clients/' + numCompteEpargne);
  // }

  // saveCompteCourant(compteCourant: CompteCourant): Observable<CompteCourant> {
  //   if (compteCourant.numCompte) { // UPDATE
  //     return this.http.put<CompteCourant>('http://localhost:3004/comptes/' + compteCourant.numCompte, compteCourant);
  //   } else { // INSERT
  //     return this.http.post<CompteCourant>('http://localhost:3004/comptes', compteCourant);
  //   }
  // }

  // saveCompteEpargne(client: Client): Observable<Client> {
  //   if (client.id) { // UPDATE
  //     return this.http.put<CompteEpargne>('http://localhost:3004/clients/);
  //   } else { // INSERT
  //     return this.http.post<CompteEpargne>('http://localhost:3004/clients/' +client.id, compteEpargnes);
  //   }
  // }

 
  deleteCompteEpargne(client: Client): Observable<any> {
    return this.http.delete('http://localhost:3004/clients/' + client);
  }
}
