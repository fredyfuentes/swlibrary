import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacterByUrl(url: string): Observable<Character> {
    return this.http.get<Character>(`${url}`).pipe(map((resp: any) => this.toObject(resp)));
  }

  private toObject(resp: any): Character {
    let character: Character = {
      name: resp.name,
      eye_color: resp.eye_color,
      gender: resp.gender,
      films: resp.films
    }

    return character;
  }
}
