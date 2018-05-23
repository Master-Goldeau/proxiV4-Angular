import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteListComponent } from './compte-list/compte-list.component';
import { FieldComponent } from './field/field.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteService } from './compte.service';

const routes: Routes = [
  { path: 'listeComptes', component: CompteListComponent },
  // { path: 'editClient/:clientId', component: ClientFormComponent },
  // { path: 'newClient', component: ClientFormComponent },
  
  { path: '', redirectTo: 'listeComptes', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    FieldComponent,
    CompteListComponent,
  ],
  providers:[
    CompteService
  ]
})
export class CompteModule { }
