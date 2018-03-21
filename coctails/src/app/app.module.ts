import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CokctailListComponent } from './core/cokctail-list/cokctail-list.component';
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component';
import { CocktailService } from './core/cocktail.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { CocktailComponent } from './core/cocktail/cocktail.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CokctailListComponent,
    CokctailDetailComponent,
    NavbarComponent,
    HomeComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
