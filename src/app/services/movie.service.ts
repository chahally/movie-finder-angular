// MovieService
// Handles fetching movies from the TMDB API.

/**
 * Movie Finder App (Standalone Angular)
 *
 * Stack: Angular 18 with Standalone Components
 * Features:
 * - TMDB API integration
 * - Router with provideRouter
 * - Standalone components (no NgModule)
 * - Search + dynamic results
 * - Loading & error states
 * - TypeScript models
 * - Clean folder structure
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiKey = '6b9ac57547792dac2742affbc2867148';
  private apiUrl = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get<any>(
      `${this.apiUrl}?api_key=${this.apiKey}&query=${query}`
    ).pipe(map(response => response.results));
  }
}