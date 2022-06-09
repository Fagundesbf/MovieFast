import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: 'home', loadChildren: './models/home/home.module#HomeModule'},
 { path: 'movies', loadChildren: './models/movies/movies.module#MoviesModule'},
 { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
