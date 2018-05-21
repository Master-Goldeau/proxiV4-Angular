import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
 
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;
  clientId: number;

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
      adresse: ['', [Validators.required, Validators.minLength(1)]],
      telephone: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      
    });
    
   //a t on un id de client ds l'url?(si oui => edition), (si non =>creation)
   this.route.paramMap.subscribe(params => {
    this.clientId = +params.get('clientId');
    if (this.clientId) { //edition
      //charge le client depuis le backend
      this.clientService.loadClient(this.clientId).subscribe(client => {
        //met a jour le form avec le client qu'on vient de charger
        this.clientForm.patchValue(client);
      })
    }
  })
}

saveClient() {
  //recupere les donnees du formulaire
  const data = this.clientForm.value; // TOUT LE FORMULAIRE

  //cree une instance de client a partir des data form
  const newClient = new Client(data);

  //reprend l'id du Client en cours avant de faire saveClient() =>peut etre undefined ou avec d valeurs
  newClient.id = this.clientId;

  //enregistre client ds la bdd
  this.clientService.saveClient(newClient).subscribe(() => {
    //confirmation
    alert('Client enregistré avec succes!');
    //redirection sur la liste des clients
    this.router.navigate(['listeClients']);
  })
 }
}
