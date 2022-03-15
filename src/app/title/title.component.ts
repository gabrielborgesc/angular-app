import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "title"

  private value: number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.title="new title"
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    console.log('destroy')
}

  add(): void{
    this.value+=1;
  }

  reset(): void {
    this.value=0;
  }
  
  getValue() : number{
    return this.value;
  }
}
