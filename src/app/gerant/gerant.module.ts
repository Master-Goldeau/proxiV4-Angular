import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
// import { AuthGuard } from './services/auth.guard';
// import { AuthService } from './services/auth.service';
=======
import { GerantLoginComponent } from './gerant-login/gerant-login.component';
>>>>>>> a734140f8f140b58520c55cc39fdeee4a6cb107a

@NgModule({
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  declarations: [],

  providers:[
    // AuthGuard,
    // AuthService
  ]
=======
  declarations: [GerantLoginComponent]
>>>>>>> a734140f8f140b58520c55cc39fdeee4a6cb107a
})
export class GerantModule { }
