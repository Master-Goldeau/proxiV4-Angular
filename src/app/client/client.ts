import { Conseiller } from "../conseiller/conseiller";
import { CompteCourant } from "../compte/compte courant/compte courant";
import { CompteEpargne } from "../compte/compte epargne/compte epargne";
// import { Person } from "../person";

interface ClientOptions {
    id?: number,
    nom?: string,
    prenom?: string,
    telephone?: string,
    adresse?: string,
    ville?: string,
    codePostal?: string,
    conseiller?: Conseiller,
    CompteCourant?: CompteCourant,
    CompteEpargne?: CompteEpargne,
}

export class Client { //implements Person
    id: number;
    prenom: string;
    nom: string;
    telephone: string;
    adresse: string;
    ville: string;
    codePostal: string;
    conseiller: Conseiller;
    compteCourant: CompteCourant;
    compteEpargne: CompteEpargne;

    constructor(client: ClientOptions={}) {
        this.id = client.id || null;
        this.prenom = client.prenom || '';
        this.nom = client.nom || '';
        this.adresse = client.adresse || '';
        this.codePostal = client.codePostal || '';
        this.ville = client.ville || '';
        this.telephone = client.telephone || '';
        this.compteCourant = client.CompteCourant; 
        this.compteEpargne = client.CompteEpargne;
    }

}

// export interface Client {
//     id: number,
//     prenom: string,
//     nom: string,
//     login: string,
//     password: string,
//     conseiller: Conseiller
// }