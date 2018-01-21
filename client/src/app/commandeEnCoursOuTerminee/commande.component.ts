import { Component } from '@angular/core';
import * as socketIO from 'socket.io-client';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html',
    styleUrls: ['./commande.component.css']
})

export class CommandeComponent implements AfterViewInit {
    private socket: socketIO.Socket;
    private commandeEstTerminee = false;
    private nomMajordome: string;

    ngAfterViewInit() {
        this.socket = socketIO.connect('10.200.10.215:3000');
        this.socket.on('commande confirmee', (objMajordome) => {
            this.commandeEstTerminee = true;
            // Nom du majordome dans l'attribut : nomMajordome
        });
    }
}
