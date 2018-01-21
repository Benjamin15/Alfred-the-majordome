import { AnimauxComponent } from './ServiceAnimaux/animaux.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {EpicerieComponent} from './serviceEpicerie/epicerie.component';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: 'epicerie', component: EpicerieComponent },
  { path: '', component: AccueilComponent},
  { path: 'animaux', component: AnimauxComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EpicerieComponent,
    AnimauxComponent,
    AccueilComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
