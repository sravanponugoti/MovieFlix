import { Component, OnInit } from '@angular/core';

import { movie_mocks } from '../../assets/movie_mocks';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuVisible = false;

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  

  ngOnInit(): void {
    this.movies = movie_mocks;
    this.filteredMovies = movie_mocks;
  }

  handleToggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  handleGenreClick(genre: string) {
    if(genre === 'all') {
      this.filteredMovies = movie_mocks;
    } else {
      this.filteredMovies = movie_mocks.filter(movie => movie?.genres.includes(genre));
    }
    
  }

}
