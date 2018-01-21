import { Products } from './../Models/Products';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-epicerie',
  templateUrl: './epicerie.component.html',
  styleUrls: ['./epicerie.component.scss'
  ]
})

export class EpicerieComponent {

  public nArticle = Products.numberArticle;

  public addItem(item: string): void {
    if (Products.achats.has(item)) {
      Products.achats.set(item, Products.achats.get(item) + 1);
    } else {
      Products.achats.set(item, 1);
    }
    Products.numberArticle++;
    this.nArticle = Products.numberArticle;
  }

  public send(): void {

  }
}
