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

  searchMovie(searchQuery: string): Observable<Movie[]> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search || []),
        switchMap((searchResults: any[]) => {
          if (searchResults.length === 0) {
            return of([]);
          }

          const detailRequests = searchResults.slice(0, 10).map(movie =>
            this.getMovieInformation(movie.imdbID)
          );

          return forkJoin(detailRequests);
        })
      );
  }

  getMovieInformation(imdbId: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

}
