import { Conseiller } from "../conseiller/conseiller";

// interface ClientOptions {
//     id?: number,
//     prenom?: string,
//     nom?: string,
//     login?: string,
//     password?: string,
//     conseiller?: Conseiller
// }

// export class Client {
//     id: number;
//     prenom: string;
//     nom: string;
//     login: string;
//     password: string;
//     conseiller: Conseiller


//     constructor(client: ClientOptions) {
//         this.id = client.id;
//         this.prenom = client.prenom;
//         this.nom = client.nom;
//         this.login = client.login;
//     }

// }

export interface Client {
    id: number,
    prenom: string,
    nom: string,
    login: string,
    password: string,
    conseiller: Conseiller
}