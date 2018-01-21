import { ServiceGarderieComponent } from './ServiceGarderie/serviceGarderie.component';
import { AuthGuard } from './AuthGuard';
import { ValidationCommandeComponent } from './ValidationCommande/validation-commande.component';
import { MajordomeComponent } from './majordome/majordome.component';
import { AnimauxComponent } from './ServiceAnimaux/animaux.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {EpicerieComponent} from './serviceEpicerie/epicerie.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'marchandise', component: EpicerieComponent },
  { path: 'animaux', component: AnimauxComponent },
  { path: 'validation-commande', component: ValidationCommandeComponent, canActivate: [AuthGuard] },
  { path: '', component: AccueilComponent},
  { path: 'majordome', component: MajordomeComponent },
  { path: 'gardiennage', component: ServiceGarderieComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EpicerieComponent,
    AnimauxComponent,
    ValidationCommandeComponent,
    AccueilComponent,
    MajordomeComponent,
    ServiceGarderieComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
