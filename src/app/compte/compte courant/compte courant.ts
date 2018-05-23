import { Compte } from "../compte";
import { Client } from "../../client/client";

export class CompteCourant implements Compte {
    client: Client;
    id: number;
    solde: number;
    dateOuverture: string;
    
    constructor(client: Client, idCompteCourant:number,soldeCompteCourant:number, dateOuvertureCompteCourant:string) {
        this.client=client;
        this.id=idCompteCourant;
        this.solde = soldeCompteCourant;
        this.dateOuverture = dateOuvertureCompteCourant;
        
    }

}