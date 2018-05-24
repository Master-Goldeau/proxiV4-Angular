
import { Client } from "../../client/client";
import { Compte } from "../compte";

export class CompteCourant extends Compte {
    // client: Client;
    // numCompteCourant: number;
    // soldeCourant: number;
    // dateOuvertureCourant: string;
    carteVisa:string;
    
    constructor(compteCourant:CompteCourant) {
        super(compteCourant);
        this.carteVisa=compteCourant.carteVisa;
    } 

}