import { Compte } from "../compte";
import { Client } from "../../client/client";


export class CompteEpargne implements Compte {
    client: Client;
    id: number;
    solde: number;
    dateOuverture: string;
    
    constructor(client: Client, idCompteEpargne:number,soldeCompteEpargne:number, dateOuvertureCompteEpargne:string) {
        this.client=client;
        this.id=idCompteEpargne;
        this.solde = soldeCompteEpargne;
        this.dateOuverture = dateOuvertureCompteEpargne;
        
    } 

}