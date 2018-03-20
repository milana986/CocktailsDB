import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cokctail-detail',
  templateUrl: './cokctail-detail.component.html',
  styleUrls: ['./cokctail-detail.component.css']
})
export class CokctailDetailComponent implements OnInit {
@Input() cocktail:any;

  constructor() { }

  ngOnInit() {
    
  }

}
