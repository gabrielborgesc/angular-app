import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {


  public list: Array<{name: string, age: number}> = [
    {name: "gabriel", age: 23},
    {name: "borges", age: 30},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getData(i: number){
    this.sendData.emit(this.list[i])
  }

  @Output() public sendData = new EventEmitter()

}
