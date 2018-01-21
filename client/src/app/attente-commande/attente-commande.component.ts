import { Garderie } from './../ServiceGarderie/garderie.model';
import { Animal } from './../ServiceAnimaux/animal.model';
import { RechercheMajordome } from './../RechercheMajordome';
import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import * as socketIO from 'socket.io-client';

class Product {
    public article: string;
    public nArticle: number;

    constructor(key: string, quantite: number) {
      this.article = key;
      this.nArticle = quantite;
    }
  }

@Component({
    selector: 'app-attente-commande',
    templateUrl: './attente-commande.component.html',
    styleUrls: ['./attente-commande.component.css']
})

export class AttenteCommandeComponent implements OnInit, AfterViewInit {

    private socket: socketIO.Socket;
    public subjectAnimal = new Subject<Animal>();
    public subjectGardiennage = new Subject<Garderie>();
    public subjectEpicerie = new Subject<Array<Product>>();
    public child = RechercheMajordome.child;
    public magasinage = RechercheMajordome.magasinage;
    public animaux = RechercheMajordome.animal;
    public animal: Animal;
    public garderie: Garderie;
    public epicerie = new Array<Product>();
    ngOnInit() {
        this.socket = socketIO.connect('10.200.10.215:3000');
        this.socket.on('animal majordome', (obj) => {
            this.subjectAnimal.next(JSON.parse(obj));
        });
        this.socket.on('gardiennage majordome', (obj) => {
            console.log('Boom');
            console.log(JSON.parse(obj));
            this.subjectGardiennage.next(JSON.parse(obj));
        });

        this.socket.on('marchandise majordome', (obj) => {
            console.log('marchandise reçu');
            this.subjectEpicerie.next(JSON.parse(obj));
        });
    }

    ngAfterViewInit() {
        this.subjectGardiennage.asObservable().subscribe((value) => {
            this.garderie = value;
        });
        this.subjectAnimal.asObservable().subscribe( (value) => {
            this.animal = value;
        });

        this.subjectEpicerie.asObservable().subscribe( (value) => {
            this.epicerie = value;
        });

    }

    confirmation() {
        console.log('Confirmé côté majordome');
        this.socket.emit('confirmation');
    }
}
