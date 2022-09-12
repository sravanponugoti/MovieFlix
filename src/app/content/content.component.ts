import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
