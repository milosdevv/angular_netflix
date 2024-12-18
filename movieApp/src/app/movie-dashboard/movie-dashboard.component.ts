import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MovieDashboardModule } from './movie-dashboard.module';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrl: './movie-dashboard.component.scss'
})

export class MovieDashboardComponent implements OnInit{
  http:HttpClient = inject(HttpClient)
  apiKey: string = 'd38aa8716411ef7d8e9054b34a6678ac';
  baseUrl: string = 'https://api.themoviedb.org/3/discover/movie';

  genres:any[] = []
  movies:any[] = []

  fetchGenres(): void {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    this.http.get(url).subscribe({
      next: (response: any) => {
        this.genres = response.genres; // Store genres in the genres array
        console.log('Genres:', this.genres);
      },
      error: (err) => {
        console.error('Error fetching genres:', err);
      }
    });
  }

  showMovies(genreId: string) {
    const url = `${this.baseUrl}?with_genres=${genreId}&api_key=${this.apiKey}`;

    this.http.get(url).subscribe({
      next: (response) => {
        console.log('Movies:', response);
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  ngOnInit(): void {
    this.fetchGenres()
  }
}
