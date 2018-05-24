
// import { Client } from "../../client/client";
// import { Compte } from "../compte";

// export class CompteCourant implements Compte { //extends
//     // client: Client;
//     numCompteCourant: number;
//     soldeCourant: number;
//     dateOuvertureCourant: string;
//     carteVisa:string;

//     constructor(compteCourant:CompteCourant) {
//        // super(compteCourant);

//        this.numCompteCourant=compteCourant.numCompteCourant;
//         this.carteVisa=compteCourant.carteVisa;
//     } 

// }

import { Compte } from "../compte";
import { Client } from "../../client/client";
interface CompteCOptions {
    numCompte?: number;
    solde?: number;
    dateOuverture?: string;
    typeCompte?: string;
    carteVisa?: string;
}
export class CompteCourant implements Compte {
    numCompte: number;
    solde: number;
    dateOuverture: string;
    typeCompte: string;
    carteVisa: string;

    constructor(compteCourant: CompteCOptions = {}) {
        this.numCompte = compteCourant.numCompte;
        this.solde = compteCourant.solde;
        this.dateOuverture = compteCourant.dateOuverture;
        this.typeCompte = compteCourant.typeCompte;
        this.carteVisa = compteCourant.carteVisa
    }

}