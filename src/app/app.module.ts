import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ConseillerModule } from './conseiller/conseiller.module';
import { GerantModule } from './gerant/gerant.module';

// import { FieldComponent } from './field/field.component';




@NgModule({
  declarations: [
    AppComponent,
//  FieldComponent, 
   ],

  imports: [
    BrowserModule,
    ClientModule,
    ConseillerModule,
    GerantModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    
  ],

  providers: [
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
