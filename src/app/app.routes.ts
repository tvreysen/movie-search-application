import { Routes } from '@angular/router';
import { MovieSearch } from './movie-search/movie-search';
import { Home } from './home/home'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'movies', component: MovieSearch } // You can create a separate component for messages later
];
