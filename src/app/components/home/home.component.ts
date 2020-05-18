import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>
    <br>
    <hr>

    <app-css></app-css>
    <br>
    <br>
    <hr>

    <app-clases></app-clases>
    <br>
    <br>
    <hr>
    <p [appResaltado]="'orange'">
      Hola Mundo
    </p>
    <br>
    <br>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
