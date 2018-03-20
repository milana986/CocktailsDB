import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

const url:string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";

@Injectable()
export class CocktailService {

  constructor(private http: HttpClient) { }

  get(params?: any): Observable<any>{
    let queryParams = {};
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(url, queryParams).map(res => {
      return res;
    });
  }

}
