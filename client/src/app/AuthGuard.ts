import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Products} from './Models/Products';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate() {
        if (Products.numberArticle > 0) {
            return true;
        }
        console.log(Products.numberArticle);
        this.router.navigate(['/']);
        return false;
    }
}