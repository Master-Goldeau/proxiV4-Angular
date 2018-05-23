import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Compte} from './compte';

@Injectable()
export class CompteService {

  constructor(
    private http:HttpClient
  ) { }

  loadComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>('http://localhost:3004/comptes');
  }

  loadCompte(compteId: number): Observable<Compte> {
    return this.http.get<Compte>('http://localhost:3004/comptes/' + compteId);
}

saveCompte(compte: Compte): Observable<Compte> {
  if (compte.id) { // UPDATE
    return this.http.put<Compte>('http://localhost:3004/comptes/' + compte.id,compte);
  } else { // INSERT
    return this.http.post<Compte>('http://localhost:3004/comptes', compte);
  }
}

}
