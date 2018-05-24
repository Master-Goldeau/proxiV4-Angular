import { Client } from "../../client/client";
import { Compte } from "../compte";


export class CompteEpargne extends Compte {
    // client: Client;
    // numCompteEpargne: number;
    // soldeEpargne: number;
    // dateOuverture: string;
    tauxRenumeration:number;
    
    constructor(compteEpargne:CompteEpargne) {
        super(compteEpargne);
        this.tauxRenumeration=compteEpargne.tauxRenumeration;
    } 

}