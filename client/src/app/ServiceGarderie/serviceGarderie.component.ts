import { Garderie } from './garderie.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as socketIO from 'socket.io-client';

@Component({
  selector: 'service-garderie',
  templateUrl: './serviceGarderie.component.html',
  styleUrls: ['./serviceGarderie.component.css']
})
export class ServiceGarderieComponent implements OnInit {
  private socket: socketIO.Socket;
  private garderie: Garderie;

  ngOnInit() {
    this.garderie = new Garderie();
    this.socket = socketIO.connect('10.200.10.215:3000');
  }

  private sauvegarderGarderie() {
    console.log('garderie : ', this.garderie);
    
  }
}
