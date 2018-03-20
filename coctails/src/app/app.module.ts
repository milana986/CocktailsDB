import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CokctailListComponent } from './core/cokctail-list/cokctail-list.component';
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component';
import { CocktailService } from './core/cocktail.service'
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CokctailListComponent,
    CokctailDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
