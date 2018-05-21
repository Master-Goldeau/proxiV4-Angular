// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ConseillerService } from '../conseiller.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Conseiller } from '../conseiller';

// @Component({
//   selector: 'app-conseiller-form',
//   templateUrl: './conseiller-form.component.html',

// })
// export class ConseillerFormComponent implements OnInit {

//   conseillerForm: FormGroup;
//   conseillerId: number;

//   constructor(private fb: FormBuilder,
//     private conseillerService: ConseillerService,
//     private router: Router,
//     private route: ActivatedRoute

//   ) { }

//   ngOnInit() {
//     //construit le formulaire tjs a vide
//     this.conseillerForm = this.fb.group({
//       prenom: ['', [Validators.required, Validators.minLength(2)]],
//       nom: ['', [Validators.required, Validators.minLength(2)]],
//       login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
//       password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],

//     });

//     //a t on un id de conseiller ds l'url?(si oui => edition), (si non =>creation)
//     this.route.paramMap.subscribe(params => {
//       this.conseillerId = +params.get('conseillerId');
//       if (this.conseillerId) { //edition
//         //charge le conseiller depuis le backend
//         this.conseillerService.loadConseiller(this.conseillerId).subscribe(conseiller => {
//           //met a jour le form avec le conseiller qu'on vient de charger
//           this.conseillerForm.patchValue(conseiller);
//         })
//       }
//     })
//   }

//   saveConseiller() {
//     //recupere les donnees du formulaire
//     const data = this.conseillerForm.value; // TOUT LE FORMULAIRE

//     //cree une instance de conseiller a partir des data form
//     const newConseiller = new Conseiller(data);

//     //reprend l'id du Conseiller en cours avant de faire saveConseiller() =>peut etre undefined ou avec d valeurs
//     newConseiller.id = this.conseillerId;

//     //enregistre conseiller ds la bdd
//     this.conseillerService.saveConseiller(newConseiller).subscribe(() => {
//       //confirmation
//       alert('Conseiller enregistré avec succes!');
//       //redirection sur la liste des conseillers
//       this.router.navigate(['listeConseillers']);
//     })
//   }
// }

