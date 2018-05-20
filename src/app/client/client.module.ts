import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';
import { FieldComponent } from '../field/field.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'listeClients', component: ClientListComponent },
  { path: 'editClient/:clientId', component: ClientFormComponent },
  { path: 'newClient', component: ClientFormComponent },
  { path: '', redirectTo: 'listeClients', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent,
    FieldComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],

  providers: [
    ClientService
  ]
})
export class ClientModule { }
