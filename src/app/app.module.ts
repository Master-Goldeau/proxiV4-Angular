import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { HomeComponent } from './common/home/home.component';
import { CommonModule } from '@angular/common';
import { ConseillerLoginComponent } from './conseiller/conseiller-login/conseiller-login.component';
import { GerantLoginComponent } from './gerant/gerant-login/gerant-login.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'conseiller-login', component: ConseillerLoginComponent},
  { path:'gerant-login', component: GerantLoginComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConseillerLoginComponent,
    GerantLoginComponent,

    ],

  imports: [
    BrowserModule,
    ClientModule,
    RouterModule.forRoot(routes),      
    HttpClientModule,
    FormsModule,
  
    
  ],

  providers: [
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
