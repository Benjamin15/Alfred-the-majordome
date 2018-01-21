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

    ngOnInit() {
        this.socket = socketIO.connect('http://localhost:3000');
        this.socket.on('animal majordome', function(obj) {
            console.log('Majordome : ', obj);
        });
    }
}
