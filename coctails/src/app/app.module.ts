import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CokctailListComponent } from './core/cokctail-list/cokctail-list.component';
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component';
import { CocktailService } from './core/cocktail.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { CocktailComponent } from './core/cokctail-list/cocktail/cocktail.component';
import { IngredientsPipe } from './core/ingredients.pipe';
import { IngredientsComponent } from './core/cokctail-list/ingredients/ingredients.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CokctailListComponent,
    CokctailDetailComponent,
    NavbarComponent,
    HomeComponent,
    CocktailComponent,
    IngredientsPipe,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
