import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cokctail-list',
  templateUrl: './cokctail-list.component.html',
  styleUrls: ['./cokctail-list.component.css']
})
export class CokctailListComponent implements OnInit {
  cocktails: any[];
  ingredients: any[];
  query:string;
  text: string = '';
  flag = false;

  constructor(private CocktailService: CocktailService, private router: Router) { }

  ngOnInit() {
    this.CocktailService.getByName('s').subscribe( data => this.cocktails = data.drinks);
  }

  onChange(){
    this.flag = true;
    this.getCocktails();
  }

  submit(){
    this.getCocktails();
  }

  getCocktails(){
    if( this.query === 's='){
      this.CocktailService.getByName(this.query + this.text).subscribe( data => this.cocktails = data.drinks);
    }else if(this.query === 'i=') {
      this.CocktailService.getByName(this.query + this.text).subscribe( data => this.ingredients = data.ingredients);
    }
  }


}
