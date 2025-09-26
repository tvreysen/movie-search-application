import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private readonly API_KEY = `5bb7ec99`;

  constructor(private readonly http: HttpClient) { }

  async searchMovie(searchQuery: string): Promise<any[]> {
    try {
      // First, get the search results
      const searchResponse: any = await this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`).toPromise();
      const searchResults = searchResponse.Search || [];

      if (searchResults.length === 0) {
        return [];
      }

      // Then, get detailed information for each movie
      const detailedMovies = [];
      for (let movie of searchResults) {
        const detailedMovie = await this.getMovieInformation(movie.imdbID).toPromise();
        detailedMovies.push(detailedMovie);
      }

      return detailedMovies;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  }

  getMovieInformation(imdbId: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

}
