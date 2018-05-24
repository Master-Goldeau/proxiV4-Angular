import { Gerant } from "../gerant/gerant";
import { Client } from "../client/client";
// import { Person } from "../person";


// export interface Conseiller {
//     id: string;
//     nom: string;
//   }

interface ConseillerOptions {
  id?: number,
  prenom?: string,
  nom?: string,
  login?: string,
  password?: string,
  gerant?: Gerant,
  clients?: Client[];
}

export class Conseiller { //implements Person
  id: number;
  prenom: string;
  nom: string;
  login: string;
  password: string;
  gerant: Gerant;
  clients: Client[];


  constructor(conseiller: ConseillerOptions={}) {
      this.id = conseiller.id;
      this.prenom = conseiller.prenom;
      this.nom = conseiller.nom;
      this.login = conseiller.login;
      this.password=conseiller.password;
      this.gerant=conseiller.gerant;
      this.clients=conseiller.clients;
  }

}