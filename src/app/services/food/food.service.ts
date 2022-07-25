import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getFoodList().find(food => food.id == id)!;
  }

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
    if (tag == "All")
      return this.getFoodList();
    else
      return this.getFoodList().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Pizza', count: 2 },
      { name: 'Burger', count: 1 },
      { name: 'Italian Pasta', count: 2 },
    ]
  }

}
