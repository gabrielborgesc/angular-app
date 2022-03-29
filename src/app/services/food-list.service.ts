import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = []

  constructor() { }

  public getList(){
    return this.list
  }

  public foodListAdd(value: string){
    this.list.push(value)
  }

}
