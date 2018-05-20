import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ],

  imports: [
    BrowserModule,
    ClientModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule
  ],

  providers: [
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
