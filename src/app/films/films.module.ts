import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { FilmsRoutingModule } from './films-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
