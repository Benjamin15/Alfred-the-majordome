import { Component } from '@angular/core';

@Component({
  selector: 'service-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent {
  private nomAnimal: string;
  private description: string;
  private besoinsSpecifiques: string;
}
