import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  title: string = '';
  episode: string = '';
  charactersFilm: string = '';
  characters: Character [] = [];
  p: number = 1;
  eyeColor: string = '';
  gender: string = '';
  isLoading: boolean = true;
  
  constructor(private activateRoute: ActivatedRoute,
              private characterService: CharactersService) { }

  ngOnInit(): void {    
    this.title = this.activateRoute.snapshot.params.title;
    this.episode = this.activateRoute.snapshot.params.episode_id;
    this.charactersFilm = this.activateRoute.snapshot.params.characters;

    let chf: string[] = this.charactersFilm.split(',');

    chf.forEach(strChar => {
      this.characterService.getCharacterByUrl(strChar).subscribe(resp => {
        this.isLoading = false;
        this.characters.push(resp);
      });
    })
  }

}
