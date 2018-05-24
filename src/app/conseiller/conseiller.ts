import { Gerant } from "../gerant/gerant";
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
  gerant?: Gerant
}

export class Conseiller { //implements Person
  id: number;
  prenom: string;
  nom: string;
  login: string;
  password: string;
  gerant: Gerant;


  constructor(conseiller: ConseillerOptions={}) {
      this.id = conseiller.id;
      this.prenom = conseiller.prenom;
      this.nom = conseiller.nom;
      this.login = conseiller.login;
      this.password=conseiller.password
  }

}