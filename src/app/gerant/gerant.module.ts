import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GerantLoginComponent } from './gerant-login/gerant-login.component';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './services/auth.guard';
// import { AuthService } from './services/auth.service';


const routes: Routes = [
// { path: 'gerant-login', component: GerantLoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],

  providers:[
    // AuthGuard,
    // AuthService
  ]
})
export class GerantModule { }
