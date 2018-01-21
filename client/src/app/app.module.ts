import { MarchandComponent } from './marchand/marchand.component';
import { BenProfileComponent } from './accueil/majordome_profiles/ben_profile.component';
import { YounesProfileComponent } from './accueil/majordome_profiles/younes_profile.component';
import { MarcProfileComponent } from './accueil/majordome_profiles/marc_profile.component';
import { JoProfileComponent } from './accueil/majordome_profiles/jo_profile.component';
import { ListMajordomeComponent } from './majordome/listMajordome.component';
import { AttenteCommandeComponent } from './attente-commande/attente-commande.component';
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
  { path: 'list-Majordome', component: ListMajordomeComponent},
  { path: 'Marc', component: MarcProfileComponent},
  { path: 'Ben', component: BenProfileComponent},
  { path: 'Younes', component: YounesProfileComponent},
  { path: 'Jo', component: JoProfileComponent},
  { path: 'marchandEnAttente', component: AttenteCommandeComponent  },
  { path: 'marchand', component: MarchandComponent}
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
    ListMajordomeComponent,
    JoProfileComponent,
    MarcProfileComponent,
    YounesProfileComponent,
    BenProfileComponent,
    AttenteCommandeComponent,
    ListMajordomeComponent,
    MarchandComponent
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
