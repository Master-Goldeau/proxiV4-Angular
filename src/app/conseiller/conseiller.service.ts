import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http'
import { Conseiller } from './conseiller';

@Injectable()
export class ConseillerService {

  constructor(
    private http: HttpClient
  ) { }


  loadConseillers(): Observable<Conseiller[]> {
    return this.http.get<Conseiller[]>('http://localhost:3004/conseillers');
  }

  loadConseiller(conseillerId: number): Observable<Conseiller> {
    return this.http.get<Conseiller>('http://localhost:3004/conseillers/' + conseillerId);
  }

  // saveConseiller(conseiller: Conseiller): Observable<Conseiller> {
  //   if (conseiller.id) { // UPDATE
  //     return this.http.put<Conseiller>('http://localhost:3004/conseillers/' + conseiller.id, conseiller);
  //   } else { // INSERT
  //     return this.http.post<Conseiller>('http://localhost:3004/conseillers', conseiller);
  //   }
  // }

  // deleteConseiller(conseillerId: number): Observable<any> {
  //   return this.http.delete('http://localhost:3004/conseillers/' + conseillerId);
  // }
}
