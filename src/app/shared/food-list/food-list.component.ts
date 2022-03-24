import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  private foodList: Array<string> = []

  constructor(private foodListService: FoodListService) { 
    
  }

  ngOnInit(): void {
    this.foodList = this.foodListService.getList()
  }

  public getFoodList(){
    return this.foodList;
  }

}
