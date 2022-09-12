import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { movie_mocks } from '../../assets/movie_mocks';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: Movie | undefined = {};

  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.movie = movie_mocks.find(movie => movie['_id'] === params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
