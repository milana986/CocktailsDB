import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientArr'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let map = new Map();
    Object.keys(value).forEach( key => map.set(key, value[key]));
    let ingredientArr = Array.from(map).filter( elem => {
      if( elem[0].includes('strIngredient') && elem[1] !== "" && elem[1] !== null) {
        return elem;
      }
    }).map(el => el[1]);
    console.log(ingredientArr);
    return ingredientArr;
  }
}
