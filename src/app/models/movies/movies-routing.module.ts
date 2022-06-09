import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'detail/:id', component: DetailComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MoviesRoutingModule { }
