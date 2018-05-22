import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldComponent } from './field/field.component';

import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerService } from './conseiller.service';
import { ConseillerLoginComponent } from './conseiller-login/conseiller-login.component';
import { GerantLoginComponent } from '../gerant/gerant-login/gerant-login.component';



const routes: Routes = [
  { path: 'listeConseillers', component: ConseillerListComponent },
  { path: 'conseiller-login', component: ConseillerLoginComponent },
  { path: 'gerant-login', component: GerantLoginComponent },
]

@NgModule({
  declarations: [
    ConseillerListComponent,
    FieldComponent,
    ConseillerLoginComponent, 
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],

  providers: [
    ConseillerService
  ]
})
export class ConseillerModule { }
