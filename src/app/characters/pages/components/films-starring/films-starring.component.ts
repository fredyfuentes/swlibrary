import { Component, Input, OnInit } from '@angular/core';
import { FilmsService } from '../../../../films/services/films.service';
import { Film } from '../../../../films/interfaces/film.interface';

@Component({
  selector: 'app-films-starring',
  templateUrl: './films-starring.component.html',
  styles: [
  ]
})
export class FilmsStarringComponent implements OnInit {

  @Input() url!: string;

  film!: Film;

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.getFilmByUrl(this.url).subscribe(resp => this.film = resp);
  }

}
