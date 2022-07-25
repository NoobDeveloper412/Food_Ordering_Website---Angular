import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodList(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 10,
        origins: ['Italy'],
        tags: ['Pizza', 'Italian'],
        favourite: true,
        imageUrl: '/assets/img (1).jpg',
        star: 5,
        cookTime: '30 min'
      },
      {
        id: 2,
        name: 'Burger',
        price: 10,
        origins: ['France'],
        tags: ['Pizza', 'Italian'],
        favourite: true,
        imageUrl: '/assets/img (2).jpg',
        star: 4,
        cookTime: '10 min'
      },
    ]
  }

  getFoodByTags(tag: string): Foods[] {
    if (tag == "all")
      return this.getFoodList();
    else
      return this.getFoodList().filter(food => food.tags?.includes(tag));
  }

}
