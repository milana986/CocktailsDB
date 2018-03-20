import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cokctail-list',
  templateUrl: './cokctail-list.component.html',
  styleUrls: ['./cokctail-list.component.css']
})
export class CokctailListComponent implements OnInit {
  cocktails: any;
  search: string = 'Vodka';
  query:string = '';
  flag = false;

  constructor(private CocktailService: CocktailService) { }

  ngOnInit() {
    this.CocktailService.getByFilter('i=' + this.search).subscribe( data => {
      this.cocktails = data;
    });
  }

  sendQuery(){
    this.flag = !this.flag;
    console.log(this.query);
   // this.router.navigate()
  }



}
