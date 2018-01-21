import { Products } from './../Models/Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-commande',
  templateUrl: './validation-commande.component.html',
  styleUrls: ['./validation-commande.component.css'
  ]
})

export class ValidationCommandeComponent {
  private achats: Map<string, number> = Products.achats;
  public nArticle = Products.numberArticle;

}
