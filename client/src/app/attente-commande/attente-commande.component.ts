import { Animal } from './../ServiceAnimaux/animal.model';
import { RechercheMajordome } from './../RechercheMajordome';
import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import * as socketIO from 'socket.io-client';

@Component({
    selector: 'app-attente-commande',
    templateUrl: './attente-commande.component.html',
    styleUrls: ['./attente-commande.component.css']
})

export class AttenteCommandeComponent implements OnInit, AfterViewInit {

    private socket: socketIO.Socket;
    public subjectAnimal = new Subject<Animal>();
    public child = RechercheMajordome.child;
    public magasinage = RechercheMajordome.magasinage;
    public animaux = RechercheMajordome.animal;
    public animal: Animal;
    ngOnInit() {
        this.socket = socketIO.connect('10.200.10.215:3000');
    }

    ngAfterViewInit() {
        this.socket.on('animal majordome', (obj) => {
            this.subjectAnimal.next(JSON.parse(obj));
        });
        this.socket.on('gardiennage majordome', (obj) => {
            console.log('Boom');
            console.log(JSON.parse(obj));
        });
        this.subjectAnimal.asObservable().subscribe( (value) => {
            this.animal = value;
        });
    }

    public getObservableAnimal() {
        return this.subjectAnimal.asObservable();
    }
}
