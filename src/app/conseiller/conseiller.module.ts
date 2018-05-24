import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerService } from './conseiller.service';
// import { GerantModule } from '../gerant/gerant.module';
import { FieldComponent } from './field/field.component';
import { AuthService } from './services/auth.service';
import { ConseillerLoginComponent } from './conseiller-login/conseiller-login.component';
import { AuditComponent } from './audit/audit.component';

// import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  { path: 'conseillers', component: ConseillerListComponent },
  { path: 'conseiller-login', component: ConseillerLoginComponent },
  { path: 'audit', component: AuditComponent},
  
  //   // { path: 'editConseiller/:conseillerId', component: ConseillerFormComponent },
  //   // { path: 'newConseiller', component: ConseillerFormComponent },
  // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ConseillerListComponent,
    FieldComponent,
    ConseillerLoginComponent,
    AuditComponent
   ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],

  providers: [
    ConseillerService,
    // AuthGuard,
    AuthService
  ]
})
export class ConseillerModule { }
