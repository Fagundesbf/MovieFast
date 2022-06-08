import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: 'home', loadChildren:()=> import('./models/home/home.module').then(m => m.HomeModule)},
 { path: 'movies', loadChildren:()=> import('./models/movies/movie.module').then(m => m.MoviesModule)},
 { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
