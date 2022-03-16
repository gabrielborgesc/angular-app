import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public redcolor: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor = () => {
    this.redcolor=!this.redcolor
  }

}
