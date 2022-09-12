import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: Movie = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleMovieClick() {
    this.router.navigate(['/details', this.movie['_id']]);
  }

}
