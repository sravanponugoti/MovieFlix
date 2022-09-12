import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {

  @Input() movies: Movie[] = [];
  @Output() genreClick: EventEmitter<any> = new EventEmitter();

  selectedGenre = 'all';

  displayGenres: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.displayGenres = this.movies.reduce<string[]>((accGenres, movie) => {
      movie.genres?.forEach(genre => {
        if (!accGenres.includes(genre)) {
          accGenres.push(genre);
        }
      });
      return accGenres;
    }, []);
  }

  handleGenreClick(genre: string) {
    this.selectedGenre = genre;
    this.genreClick.emit(genre);
  }

}
