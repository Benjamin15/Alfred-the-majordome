import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EpicerieComponent} from './serviceEpicerie/epicerie.component';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: 'epicerie', component: EpicerieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EpicerieComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
