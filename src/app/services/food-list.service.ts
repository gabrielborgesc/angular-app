import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "item1",
    "item2"
  ]

  constructor() { }

  public getList(){
    return this.list
  }

}
