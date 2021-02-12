import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/film.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  films: Film[] = [];
  isLoading: boolean = true;

  subscripcionFilms!: Subscription;

  constructor(private filmsService: FilmsService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscripcionFilms = this.filmsService.getFilms().subscribe(resp => {
      this.isLoading = false;
      this.films = resp;
    },
    err => {
      this.router.navigate(['/week']);
    });
  }

  ngOnDestroy(): void {
    this.subscripcionFilms.unsubscribe();
  }

}
