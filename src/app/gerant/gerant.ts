// import { Person } from "../person";

export class Gerant { //implements Person
    id: number;
    nom: string;
    prenom:string;
    login:string;
    password:string;

    constructor(gerant:Gerant){
      this.id = gerant.id;
      this.prenom = gerant.prenom;
      this.nom = gerant.nom;
      this.login = gerant.login;
      this.password=gerant.password
    }
  }