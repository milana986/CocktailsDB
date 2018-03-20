import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CokctailListComponent} from './core/cokctail-list/cokctail-list.component'; 
import { CokctailDetailComponent } from './core/cokctail-detail/cokctail-detail.component'; 

const routes: Routes = [
  { path: 'cocktails', component: CokctailListComponent}
  // { path: 'cocktails/detail', component: CokctailDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }