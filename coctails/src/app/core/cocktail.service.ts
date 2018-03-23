import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

const base = 'https://www.thecocktaildb.com/api/json/v1/1/',
      url1: string = base + 'search.php?',
      url2:string = base + 'filter.php?',
      url3:string = base + 'lookup.php?';


@Injectable()
export class CocktailService {

  constructor(private http: HttpClient) { }

  getByName(params:string): Observable<any>{
    return this.http.get(url1 + params).map(res => {
      console.log(res)
      return res;
    });
  }

  getByFilter(params:string): Observable<any>{
    return this.http.get(url2 + params).map(res => {
      console.log(res)
      return res;
    });
  }

  getDetails(params:string): Observable<any>{
    return this.http.get(url3 + params).map(res => {
      console.log(res)
      return res;
    });
  }



}
