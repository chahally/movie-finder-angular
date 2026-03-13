import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card';
import { SearchComponent } from '../../components/search/search';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, SearchComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  movies: Movie[] = [];
  loading = false;
  error: string | null = null;

  constructor(private movieService: MovieService) {}

  onSearch(query: string) {
  console.log("Searching for:", query);

  this.loading = true;
  this.error = null;

  this.movieService.searchMovies(query).subscribe({
    next: movies => {
      console.log("Movies returned:", movies);
      this.movies = movies;
      this.loading = false;
    },
    error: err => {
      console.error("API error:", err);
      this.error = 'Failed to fetch movies.';
      this.loading = false;
    }
  });
}}