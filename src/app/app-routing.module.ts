import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
  },
  { path: '**', redirectTo: 'films' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
