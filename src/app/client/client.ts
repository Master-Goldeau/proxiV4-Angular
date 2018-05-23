import { Conseiller } from "../conseiller/conseiller";
import { CompteCourant } from "../compte/compte courant/compte courant";
import { CompteEpargne } from "../compte/compte epargne/compte epargne";

interface ClientOptions {
    id?: number,
    prenom?: string,
    nom?: string,
    adresse?: string,
    telephone?: string,
    conseiller?: Conseiller,
    CompteCourant?: CompteCourant,
    CompteEpargne?: CompteEpargne
}

export class Client {
    id: number;
    prenom: string;
    nom: string;
    adresse: string;
    telephone: string;
    conseiller: Conseiller;
    compteCourant: CompteCourant;
    compteEpargne: CompteEpargne;

    constructor(client: ClientOptions) {
        this.id = client.id;
        this.prenom = client.prenom;
        this.nom = client.nom;
        this.adresse = client.adresse;
        this.telephone = client.telephone;
        this.compteCourant=client.CompteCourant;
        this.compteEpargne=client.CompteEpargne;
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