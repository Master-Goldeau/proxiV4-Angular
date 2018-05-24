// import { Client } from "../client/client";

// interface CompteOptions {
//     id?: number,
//     solde?: number,
//     dateOuverture?: string,
//     client?: Client
// }

export abstract class Compte {
    numCompte: number;
    solde: number;
    dateOuverture: string;
   

    constructor(compte: Compte) {
        this.numCompte = compte.numCompte;
        this.solde= compte.solde;
        this.dateOuverture = compte.dateOuverture;
        
    }

}