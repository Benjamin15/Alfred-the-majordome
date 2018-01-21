import { Products } from './../Models/Products';
import { Component, OnInit } from '@angular/core';
import * as socketIO from 'socket.io-client';

@Component({
  selector: 'app-validation-commande',
  templateUrl: './validation-commande.component.html',
  styleUrls: ['./validation-commande.component.css'
  ]
})

export class ValidationCommandeComponent implements OnInit {
  private achats: Map<string, number> = Products.achats;
  public nArticle = Products.numberArticle;
  private socket: socketIO.Socket;

  ngOnInit() {
    this.socket = socketIO.connect('10.200.10.215:3000');
  }

  public sendCommande() {
    this.socket.emit('marchandise', JSON.stringify(this.achats));
  }
}
