import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe(resp => this.films = resp);
  }

}
