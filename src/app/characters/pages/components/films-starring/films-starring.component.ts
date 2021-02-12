import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-starring',
  templateUrl: './films-starring.component.html',
  styles: [
  ]
})
export class FilmsStarringComponent implements OnInit {

  @Input() films!: string[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
