import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { CompteCourant } from '../../compte/compte courant/compte courant';
import { CompteEpargne } from '../../compte/compte epargne/compte epargne';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',

})
export class ClientFormComponent implements OnInit {
  comptecourantForm:FormGroup;
  compteepargneForm:FormGroup;
  clientForm: FormGroup;
  clientId: number;
  idCompteC: number;
  idCompteE: number;
  // option:any;

  constructor(private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //construit le formulaire tjs a vide
    this.clientForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      adresse: [''],
      ville: [''],
      codePostal: [''],
     
    });

    this.comptecourantForm = this.fb.group({
      numCompte:[''] ,
      solde: [''] ,
      dateOuverture: [''],
      typeCompte: [''],
      carteVisa: [''] 
    });

    this.compteepargneForm = this.fb.group({  
      numCompte:[''] ,
      solde: [''] ,
      dateOuverture: [''],
      typeCompte: [''],
      carteVisa: [''], 
      tauxRemuneration:['']
    });

    //a t on un id de client ds l'url?(si oui => edition), (si non =>creation)
    this.route.paramMap.subscribe(params => {
      this.clientId = +params.get('clientId');
      //récupération du choix
      // this.option=params.get('option');
      if (this.clientId) { //edition
        //charge le client depuis le backend
        this.clientService.loadClient(this.clientId).subscribe(client => {
          //met a jour le form avec le client qu'on vient de charger
 
//Champs données client
  this.clientForm.get('nom').setValue(client.nom);
  this.clientForm.get('prenom').setValue(client.prenom);
  this.clientForm.get('adresse').setValue(client.adresse);
  this.clientForm.get('ville').setValue(client.ville);
  this.clientForm.get('codePostal').setValue(client.codePostal);
  this.clientForm.get('telephone').setValue(client.telephone);

  // Champs compte courant client
  this.comptecourantForm.get('numCompte').setValue(client.compteCourant.numCompte);
  this.comptecourantForm.get('solde').setValue(client.compteCourant.solde);
  this.comptecourantForm.get('dateOuverture').setValue(client.compteCourant.dateOuverture);
  this.comptecourantForm.get('typeCompte').setValue(client.compteCourant.typeCompte);
  this.comptecourantForm.get('carteVisa').setValue(client.compteCourant.carteVisa);

  //Champs compte Epargne client
  if (client.compteEpargne) {
    this.compteepargneForm.get('numCompte').setValue(client.compteEpargne.numCompte);
    this.compteepargneForm.get('solde').setValue(client.compteEpargne.solde);
    this.compteepargneForm.get('dateOuverture').setValue(client.compteEpargne.dateOuverture);
    this.compteepargneForm.get('typeCompte').setValue(client.compteEpargne.typeCompte);
    this.compteepargneForm.get('tauxRemuneration').setValue(client.compteEpargne.tauxRemuneration);
    }
  });
}
});
}

saveClient() {
  const compteCourantEdit: CompteCourant = new CompteCourant({
    numCompte: this.comptecourantForm.get('numCompte').value,
    solde:this.comptecourantForm.get('solde').value,
    dateOuverture:this.comptecourantForm.get('dateOuverture').value,
    typeCompte: this.comptecourantForm.get('typeCompte').value,
    carteVisa:  this.comptecourantForm.get('carteVisa').value,
  });

  const compteEpargneEdit: CompteEpargne = new CompteEpargne({
    numCompte: this.compteepargneForm.get('numCompte').value,
    solde: this.compteepargneForm.get('solde').value,
    dateOuverture: this.compteepargneForm.get('dateOuverture').value,
    typeCompte: this.compteepargneForm.get('typeCompte').value,
    tauxRemuneration:this.compteepargneForm.get('tauxRemuneration').value,

  });
  const newClient = new Client({
  nom:this.clientForm.get('nom').value,
  prenom:this.clientForm.get('prenom').value,
  adresse:this.clientForm.get('adresse').value,
  ville:this.clientForm.get('ville').value,
  codePostal:this.clientForm.get('codePostal').value,
  telephone:this.clientForm.get('telephone').value,
  CompteCourant:compteCourantEdit,
  CompteEpargne:compteEpargneEdit,
  });
    //recupere les donnees du formulaire
    // const data = this.clientForm.value; // TOUT LE FORMULAIRE

    //cree une instance de client a partir des data form
    // const newClient = new Client(data);

    //reprend l'id du Client en cours avant de faire saveClient() =>peut etre undefined ou avec d valeurs
    newClient.id = this.clientId;

    //enregistre client ds la bdd
    this.clientService.saveClient(newClient).subscribe(() => {
      //confirmation
      alert('Client enregistré avec succes!');
      //redirection sur la liste des clients
      this.router.navigate(['clients']);
    })
  }
  editClient() {
    const compteCourantEdit: CompteCourant = new CompteCourant({
      numCompte: this.comptecourantForm.get('numCompte').value,
      solde:this.comptecourantForm.get('solde').value,
      dateOuverture:this.comptecourantForm.get('dateOuverture').value,
      typeCompte: this.comptecourantForm.get('typeCompte').value,
      carteVisa:  this.comptecourantForm.get('carteVisa').value,
    });
  
    const compteEpargneEdit: CompteEpargne = new CompteEpargne({
      numCompte: this.compteepargneForm.get('numCompte').value,
      solde: this.compteepargneForm.get('solde').value,
      dateOuverture: this.compteepargneForm.get('dateOuverture').value,
      typeCompte: this.compteepargneForm.get('typeCompte').value,
      tauxRemuneration:this.compteepargneForm.get('tauxRemuneration').value,
  
    });
    const newClient = new Client({
      nom:this.clientForm.get('nom').value,
      prenom:this.clientForm.get('prenom').value,
      adresse:this.clientForm.get('adresse').value,
      ville:this.clientForm.get('ville').value,
      codePostal:this.clientForm.get('codePostal').value,
      telephone:this.clientForm.get('telephone').value,
      CompteCourant:compteCourantEdit,
      CompteEpargne:compteEpargneEdit,
      });
        //recupere les donnees du formulaire
        // const data = this.clientForm.value; // TOUT LE FORMULAIRE
    
        //cree une instance de client a partir des data form
        // newClient = new Client(data);
    
        //reprend l'id du Client en cours avant de faire saveClient() =>peut etre undefined ou avec d valeurs
        newClient.id = this.clientId;
    
        //enregistre client ds la bdd
        this.clientService.editClient(newClient).subscribe(() => {
          //confirmation
          alert('Client enregistré avec succes!');
          //redirection sur la liste des clients
          this.router.navigate(['clients']);
        })
     
      
    }
  
  
}
