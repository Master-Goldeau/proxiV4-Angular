import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConseillerLoginComponent } from './conseiller/conseiller-login/conseiller-login.component';
import { GerantLoginComponent } from './gerant/gerant-login/gerant-login.component';
import { ConseillerModule } from './conseiller/conseiller.module';
import { GerantModule } from './gerant/gerant.module';

import { CompteModule } from './compte/compte.module';
import { CompteListComponent } from './compte/compte-list/compte-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';

// import { AuthService } from './conseiller/services/auth.service';
// import { AuthGuard } from './conseiller/services/auth.guard';
// import { FieldComponent } from './field/field.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path:'conseiller-login', component: ConseillerLoginComponent},
  // { path:'gerant-login', component: GerantLoginComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    // CompteComponent,
    // CompteListComponent,
    // FieldComponent, 
    HomeComponent,
    

    ],

  imports: [
    BrowserModule,
    ClientModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ConseillerModule,
    // GerantModule,
    CompteModule,

  ],

  providers: [
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' },
    // AuthGuard,
    // AuthService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
