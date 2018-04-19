import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cokctail-detail',
  templateUrl: './cokctail-detail.component.html',
  styleUrls: ['./cokctail-detail.component.css']
})
export class CokctailDetailComponent implements OnInit {
  cocktail: Object;

  constructor(private route: ActivatedRoute , private CocktailService: CocktailService) { }

  ngOnInit() {
    this.route.params.subscribe(param => this.CocktailService.getCocktail(+param['id']).subscribe(data => this.cocktail =data));
    // this.route.paramMap.switchMap((params: ParamMap) => { this.CocktailService.getCocktail(+params.get('id'))})
  }


}
