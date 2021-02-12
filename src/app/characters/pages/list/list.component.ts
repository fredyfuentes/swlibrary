import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/character.interface';
import { FilmsService } from '../../../films/services/films.service';
import { Subscription } from 'rxjs';

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
  film: string = '';
  isLoading: boolean = true;  

  subscripcionCharacters!: Subscription;
  subscripcionFilms!: Subscription;
  
  constructor(private activateRoute: ActivatedRoute,
              private characterService: CharactersService,
              private filmService: FilmsService) { }

  ngOnInit(): void {    
    this.title = this.activateRoute.snapshot.params.title;
    this.episode = this.activateRoute.snapshot.params.episode_id;
    this.charactersFilm = this.activateRoute.snapshot.params.characters;

    let chf: string[] = this.charactersFilm.split(',');

    chf.forEach(strChar => {
      this.subscripcionCharacters = this.characterService.getCharacterByUrl(strChar).subscribe(character => {
        this.isLoading = false;        
        this.subscripcionFilms = this.filmService.getFilmByUrls(character.films).subscribe(resp => character.films = resp);
        this.characters.push(character);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscripcionFilms.unsubscribe();
    this.subscripcionCharacters.unsubscribe();
  }

}
