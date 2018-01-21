import { Animal } from './animal.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'service-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {
  private animal: Animal;

  ngOnInit() {
    this.animal = new Animal();
  }

  private sauvegarderAnimal() {
    console.log('Boom', JSON.stringify(this.animal));
  }
}
