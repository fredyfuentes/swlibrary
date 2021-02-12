import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(characters: Character[], gender: string): Character[] {
    if(!gender) return characters;
    return characters.filter(charater => charater.gender.toLocaleLowerCase().indexOf(gender.toLocaleLowerCase()) !== -1);
  }

}
