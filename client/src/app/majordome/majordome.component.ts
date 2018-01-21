import { Animal } from './../ServiceAnimaux/animal.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as socketIO from 'socket.io-client';

@Component({
    selector: 'majordome',
    templateUrl: './majordome.component.html',
    styleUrls: ['./majordome.component.css']
})

export class MajordomeComponent implements OnInit {
    private socket: socketIO.Socket;
    private listeAnimaux: Array<Animal>;

    ngOnInit() {
        this.socket = socketIO.connect('10.200.10.215:3000');
        this.socket.on('animal majordome', (obj) => {
            console.log('Majordome : ', obj);
            this.listeAnimaux.push(JSON.parse(obj));
        });
    }
}
