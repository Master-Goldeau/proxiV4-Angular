// import { Client } from "../../client/client";
// import { Compte } from "../compte";


// export class CompteEpargne extends Compte {
//     // client: Client;
//     // numCompteEpargne: number;
//     // soldeEpargne: number;
//     // dateOuverture: string;
//     tauxRenumeration:number;
    
//     constructor(compteEpargne:CompteEpargne) {
//         super(compteEpargne);
//         this.tauxRenumeration=compteEpargne.tauxRenumeration;
//     } 

// }


import { Compte } from "../compte";
import { Client } from "../../client/client";

interface CompteEOptions {
    numCompte?: number,
    typeCompte?: string,
    solde?: number,
    dateOuverture?: string,
    tauxRemuneration?: string,
}

export class CompteEpargne implements Compte {
    numCompte: number;
    typeCompte: string;
    solde: number;
    dateOuverture: string;
    tauxRemuneration: string;
    
    constructor(compteEpargne : CompteEOptions= {} ) {
        this.numCompte= compteEpargne.numCompte;
        this.typeCompte=compteEpargne.typeCompte;
        this.solde = compteEpargne.solde;
        this.dateOuverture = compteEpargne.dateOuverture;
        this.tauxRemuneration=compteEpargne.tauxRemuneration;
        
    } 

}