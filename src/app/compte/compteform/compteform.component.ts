// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Router, ActivatedRoute } from '@angular/router';

// import { CompteEpargne } from '../compte epargne/compte epargne';
// import { CompteService } from '../compte.service';
// import { ClientService } from '../../client/client.service';

// @Component({
//   selector: 'app-compteform',
//   templateUrl: './compteform.component.html',

// })
// export class CompteformComponent implements OnInit {

//   compteForm: FormGroup;
//   numCompte: number;
//   // option:any;

//   constructor(private fb: FormBuilder,
//     private clientService: ClientService,
//     private router: Router,
//     private route: ActivatedRoute, 
//     private compteService:CompteService
//   ) { }

//   ngOnInit() {
//     //construit le formulaire tjs a vide
//     this.compteForm = this.fb.group({
//       typeCompte: ['', [Validators.required, Validators.minLength(2)]],
//       solde: ['', [Validators.required, Validators.minLength(2)]],
//       dateOuverture: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
//       tauxRemuneration: [''],


//     });

//     //a t on un id de client ds l'url?(si oui => edition), (si non =>creation)
//     this.route.paramMap.subscribe(params => {
//       this.numCompte = +params.get('numCompte');
//       //récupération du choix
//       // this.option=params.get('option');
//       if (this.numCompte) { //edition
//         //charge le client depuis le backend
//         this.clientService.loadClient(this.numCompte).subscribe(client => {
//           //met a jour le form avec le client qu'on vient de charger
//           this.compteForm.patchValue(client);
//         })
//       }
//     })
//   }

//   saveCompte() {
//     //recupere les donnees du formulaire
//     const data = this.compteForm.value; // TOUT LE FORMULAIRE

//     //cree une instance de client a partir des data form
//     const newCompteEpargne: CompteEpargne = new CompteEpargne(data);

//     //reprend l'id du Client en cours avant de faire saveClient() =>peut etre undefined ou avec d valeurs
//     newCompteEpargne.numCompte = this.numCompte;

//     //enregistre client ds la bdd
//     this.compteService.saveCompte(this).subscribe(() => {
//       //confirmation
//       alert('Compte épargne enregistré avec succes!');
//       //redirection sur la liste des clients
//       this.router.navigate(['clients']);
//     })
//   }
  
//   }
  
  