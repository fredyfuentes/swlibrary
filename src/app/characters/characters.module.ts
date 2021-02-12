import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { FilmsStarringComponent } from './pages/components/films-starring/films-starring.component';



@NgModule({
  declarations: [ListComponent, FilmsStarringComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
