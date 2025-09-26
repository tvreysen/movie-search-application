import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieInformation } from '../movie-information/movie-information';
import { FormsModule } from '@angular/forms';


interface Movie {
  Title: string;
  Year: string;
  Genre: string;
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private readonly API_KEY = `5bb7ec99`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<any> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  getMovieInformation(imdbId: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

}
