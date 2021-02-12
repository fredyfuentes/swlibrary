import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
