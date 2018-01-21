import { Animal } from './../ServiceAnimaux/animal.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as socketIO from 'socket.io-client';

@Component({
    selector: 'app-majordome',
    templateUrl: './majordome.component.html',
    styleUrls: ['./majordome.component.css']
})

export class MajordomeComponent implements OnInit {
    private socket: socketIO.Socket;
    public listeAnimaux: Array<Animal>;
    public mapMarchandise: Array<Map<string, number>>;

    ngOnInit() {
        this.listeAnimaux = new Array<Animal>();
        this.mapMarchandise = new Array<Map<string, number>>();
        this.socket = socketIO.connect('10.200.10.215:3000');
        this.socket.on('animal majordome', (obj) => {
            this.listeAnimaux.push(JSON.parse(obj));
        });


        this.socket.on('marchandise majordome', (obj) => {
            this.mapMarchandise.push(new Map<string, number>());
        });
    }
}
