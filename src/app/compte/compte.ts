// import { Client } from "../client/client";

interface CompteOptions {
    numCompte?: number,
    typeCompte?:string,
    solde?: number,
    dateOuverture?: string,
   
}

export class Compte { //abstract 
    numCompte: number;
    typeCompte:string;
    solde: number;
    dateOuverture: string;
   

    constructor(compte: CompteOptions) {
        this.numCompte = compte.numCompte;
        this.solde= compte.solde;
        this.dateOuverture = compte.dateOuverture;
        this.typeCompte=compte.typeCompte
        
    }

}