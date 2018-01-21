import { RechercheMajordome } from './../RechercheMajordome';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-majordome',
    templateUrl: './majordome.component.html',
    styleUrls: ['./majordome.component.css']
})

export class MajordomeComponent implements OnInit {

    public childChosen = false;
    public animalChosen = false;
    public groceryChosen = false;

    ngOnInit() {
        RechercheMajordome.animal = false;
        RechercheMajordome.child = false;
        RechercheMajordome.magasinage = false;
        console.log(RechercheMajordome.animal);
    }

    public animalOnClick() {
        RechercheMajordome.animal = this.animalChosen;
    }

    public childOnClick() {
        RechercheMajordome.child = this.childChosen;
    }

    public magasinageOnClick() {
        RechercheMajordome.magasinage = this.groceryChosen;
    }
}
