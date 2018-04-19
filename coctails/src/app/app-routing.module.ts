import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CokctailListComponent} from './core/cokctail-list/cokctail-list.component'; 
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component'; 
import { IngredientsComponent } from './core/cokctail-list/ingredients/ingredients.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cocktails', component: CokctailListComponent, children: [
      {path: ':id', component: CokctailDetailComponent}
  ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
