import { Animal } from './animal.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as socketIO from 'socket.io-client';

@Component({
  selector: 'service-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {
  private animal: Animal;
  private socket: socketIO.Socket;

  ngOnInit() {
    this.animal = new Animal();
    this.socket = socketIO.connect('http://localhost:3000');
  }

  private sauvegarderAnimal() {
    console.log('Boom', JSON.stringify(this.animal));
    this.socket.emit('animal', JSON.stringify(this.animal));
  }
}
