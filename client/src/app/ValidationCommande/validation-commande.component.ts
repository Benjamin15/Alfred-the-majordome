import { Products } from './../Models/Products';
import { Component, OnInit } from '@angular/core';
import * as socketIO from 'socket.io-client';
import {Router} from '@angular/router';


class Product {
  public article: string;
  public nArticle: number;

  constructor(key: string, quantite: number) {
    this.article = key;
    this.nArticle = quantite;
  }
}

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
  public articles: Array<Product>;
  ngOnInit() {

    this.articles = new Array<Product>();
    this.achats.forEach((value, key, map) => {
      this.articles.push(new Product(key, value));
    });
    this.socket = socketIO.connect('10.200.10.215:3000');
  }

  public sendCommande() {
    this.socket.emit('marchandise', JSON.stringify(this.achats));
  }
}
