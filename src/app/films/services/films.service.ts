
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Film } from '../interfaces/film.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films/`).pipe(map((resp: any) => this.toArray(resp)));
  }

  getFilmByUrl(url: string): Observable<Film> {
    return this.http.get<Film>(url).pipe(map((resp: any) => this.toObject(resp)));
  }

  getFilmByUrls(urls: string[]) {
    const films = urls.map(e => {
      return this.http.get(e).pipe(map((resp: any) => this.toObject(resp)));
    })
    return forkJoin(films);
  }

  private toObject(resp: any): Film {
    let film: Film = {
      title: resp.title,
        episode_id: resp.episode_id,
        director: resp.director,
        characters: resp.characters
    }
    return film;
  }

  private toArray(resp: any): Film[] {
    let films: Film[] = [];
    resp.results.forEach((item: any) => {
      let film: Film = {
        title: item.title,
        episode_id: item.episode_id,
        director: item.director,
        characters: item.characters
      }
      films.push(film)
    });
    return films;
  }
}
