import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';
// // import { ConseillerFormComponent } from './conseiller-form/conseiller-form.component';
import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerService } from './conseiller.service';
import { GerantModule } from '../gerant/gerant.module';
import { FieldComponent } from './field/field.component';
// import { AuthGuard } from './services/auth.guard';
// import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: 'listeConseillers', component: ConseillerListComponent },
//   // { path: 'editConseiller/:conseillerId', component: ConseillerFormComponent },
//   // { path: 'newConseiller', component: ConseillerFormComponent },
// { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'listeConseillers', pathMatch: 'full' }
]

@NgModule({
  declarations: [
//     // ConseillerFormComponent,
    ConseillerListComponent,
    FieldComponent, 
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    GerantModule
  ],

  providers: [
    ConseillerService,
    // AuthGuard,
    // AuthService
  ]
})
export class ConseillerModule { }
