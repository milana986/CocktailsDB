import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CokctailListComponent } from './core/cokctail-list/cokctail-list.component';
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component';
import { CocktailService } from './core/cocktail.service';
import { NavbarComponent } from './core/navbar/navbar.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CokctailListComponent,
    CokctailDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    AppRoutingModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
