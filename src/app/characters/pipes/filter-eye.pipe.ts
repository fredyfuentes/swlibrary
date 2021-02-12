import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Pipe({
  name: 'filterEye'
})
export class FilterEyePipe implements PipeTransform {

  transform(characters: Character[], eyeColor: string): Character[] {
    if(!eyeColor) return characters;
    return characters.filter(charater => charater.eye_color.toLocaleLowerCase().indexOf(eyeColor.toLocaleLowerCase()) !== -1);
  }

}
