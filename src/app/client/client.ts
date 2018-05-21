import { Conseiller } from "../conseiller/conseiller";

interface ClientOptions {
    id?: number,
    prenom?: string,
    nom?: string,
    adresse?: string,
    telephone?: string,
    conseiller?: Conseiller
}

export class Client {
    id: number;
    prenom: string;
    nom: string;
    adresse: string;
    telephone: string;
    conseiller: Conseiller


    constructor(client: ClientOptions) {
        this.id = client.id;
        this.prenom = client.prenom;
        this.nom = client.nom;
        this.adresse = client.adresse;
        this.telephone=client.telephone
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