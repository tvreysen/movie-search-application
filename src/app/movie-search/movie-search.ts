import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie-service/movie-service';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Type: string;
  Poster: string;
  Released: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  BoxOffice: string;
  imdbID: string;
}

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css'
})

export class MovieSearch {
  query: string = '';
  movies$: Observable<Movie[]> = of([]);

  constructor(private readonly movieService: MovieService) {}

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

}
