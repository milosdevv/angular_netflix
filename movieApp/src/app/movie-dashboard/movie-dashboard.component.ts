import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { apiKey } from '../libs/API_KEY';
import { MovieListAPI } from '../libs/moviesAPI';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})

export class MovieDashboardComponent implements OnInit {
  genres: any[] = []
  movieList: any[] = []; // Array to hold the response

  constructor(private http: HttpClient) { }
  https: HttpClient = inject(HttpClient);
  ngOnInit(): void {
    this.fetchMovieList();
  }

  fetchMovieList(): void {
    const url = `${MovieListAPI}?api_key=${apiKey}`;

    this.http.get(url).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response && response.results) {
          this.movieList = response.results;
        }
      },
      error: (err) => {
        console.error('Error fetching Movie List:', err);
      }
    });
  }
}
