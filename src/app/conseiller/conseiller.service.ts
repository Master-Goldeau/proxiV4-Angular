import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http'
import { Conseiller } from './conseiller';
import { Compte } from '../compte/compte';
import { Client } from '../client/client';

@Injectable()
export class ConseillerService {

  constructor(
    private http: HttpClient
  ) { }


  loadConseillers(): Observable<Conseiller[]> {
    return this.http.get<Conseiller[]>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/conseillers/');
  }

  loadConseiller(conseillerId: number): Observable<Conseiller> {
    return this.http.get<Conseiller>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/conseillers/' + conseillerId);
  }

  audit(): Observable<Compte[]> {
    return this.http.get<Compte[]>('http://localhost:8080/ProxibanqueV4-Arnaud-Ozlem-Morane-Etienne/audit/');
  }
}
