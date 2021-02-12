import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Pipe({
  name: 'filterFilm'
})
export class FilterFilmPipe implements PipeTransform {

  transform(characters: Character[], film: string): Character[] {
    if(!film) return characters;
    return characters.filter(charater => charater.films.join(',').toLocaleLowerCase().indexOf(film.toLocaleLowerCase()) !== -1);
  }

}
