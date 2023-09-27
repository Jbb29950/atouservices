import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ElectriciteComponent } from './electricite/electricite.component';
import { PlomberieComponent } from './plomberie/plomberie.component';
import { ExterieurComponent } from './exterieur/exterieur.component';
import { DiversComponent } from './divers/divers.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    ElectriciteComponent,
    PlomberieComponent,
    ExterieurComponent,
    DiversComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
