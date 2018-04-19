import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail:any;
  @Output() onEmittedId = new EventEmitter<any>();
 
  constructor() {}

  ngOnInit() {
    console.log(this.cocktail)
  } 

  onClick(){
    this.onEmittedId.emit(this.cocktail.idDrink);
  }

  

}