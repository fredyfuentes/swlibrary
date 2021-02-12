import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { FilmsStarringComponent } from './pages/components/films-starring/films-starring.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterEyePipe } from './pipes/filter-eye.pipe';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { FilterFilmPipe } from './pipes/filter-film.pipe';



@NgModule({
  declarations: [ListComponent, FilmsStarringComponent, FilterEyePipe, FilterGenderPipe, FilterFilmPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
