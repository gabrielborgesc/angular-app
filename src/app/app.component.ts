import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-title></app-title> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
    `

})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

}
