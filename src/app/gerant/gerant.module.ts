import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { GerantLoginComponent } from './gerant-login/gerant-login.component';


const routes: Routes = [
{ path: 'gerant-login', component: GerantLoginComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    GerantLoginComponent
  ],

  providers:[
    // AuthGuard,
    AuthService
  ]
})
export class GerantModule { }
