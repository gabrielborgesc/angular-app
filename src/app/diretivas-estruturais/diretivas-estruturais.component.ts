import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})


export class DiretivasEstruturaisComponent implements OnInit {

  public renderedPhrase = "render";
  public notRenderedPhrase = "not render"

  public render : boolean = true;
  public clickRender : boolean = true;

  public list: Array<{nome: string}> = [{nome: "gabriel"}, {nome: "borges"}]

  public switchVar: string = '';

  public ngSwitchTestCompareVar: number = 0;
  
  constructor() { }

  ngOnInit(): void {

    setInterval( this.changeRender, 500 )

  }

  changeRender = () => {
    this.render = !this.render
  }

  changeClickRender() : void {
    this.clickRender = !this.clickRender
  }

  ngSwitchTestCompare() : boolean {
    return this.ngSwitchTestCompareVar > 10;
  }

}
