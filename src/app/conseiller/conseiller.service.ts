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
  
}
