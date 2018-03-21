import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail:any;

  constructor() { }

  ngOnInit() {
    let arr = Object.keys(this.cocktail).filter( elem => elem.includes('strIngredient'));
   console.log(arr)
  }

}
