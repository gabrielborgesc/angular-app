import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  public newItem: string = "";

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public listAddItem(){
    if(this.newItem !== ""){
      this.foodListService.foodListAdd(this.newItem)
      this.newItem = ""
    }
  }

}
