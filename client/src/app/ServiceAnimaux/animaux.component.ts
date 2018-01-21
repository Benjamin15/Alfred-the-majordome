import { Animal } from './animal.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as socketIO from 'socket.io-client';

@Component({
  selector: 'app-service-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {
  private animal: Animal;
  private socket: socketIO.Socket;

  ngOnInit() {
    this.animal = new Animal('', '', '');
    this.socket = socketIO.connect('10.200.10.215:3000');
    this.socket.on('confirmation server', () => {
      // vers profil
      console.log('Confirmation côté client');
    });
  }

  private sauvegarderAnimal() {
    console.log(JSON.stringify(this.animal));
    this.socket.emit('animal', JSON.stringify(this.animal));
  }
}
