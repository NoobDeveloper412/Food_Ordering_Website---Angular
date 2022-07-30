import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { bufferWhen } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  searchHeader: Boolean = false;
  isFood: Number = 0;
  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.fs.getFoodList().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        this.searchHeader = true;
        this.isFood = this.foods.length;
      }
      else if (params['tag']) {
        this.searchHeader = true;
        this.foods = this.fs.getFoodByTags(params['tag']);
      }
      else
        this.foods = this.fs.getFoodList();
    })
  }
}
