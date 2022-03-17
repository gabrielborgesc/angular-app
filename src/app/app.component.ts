import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-title></app-title> -->
    <!-- <app-diretivas-estruturais>
      <h1>Topo</h1>
      <h2>fim</h2>
    </app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!-- <app-new-component><app-new-component> -->
    <app-input [contador]="inputContador" ></app-input>
    <br>
    <button (click)="increment()" >Increment</button>

    <router-outlet></router-outlet>
    `

})
export class AppComponent implements OnInit{

  public inputContador: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  public increment(): void{
    this.inputContador++;
  }

}
