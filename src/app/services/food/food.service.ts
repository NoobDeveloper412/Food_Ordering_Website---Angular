import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodList(): string[] {
    return [
      '/assets/img (1).jpg',
      '/assets/img (2).jpg',
      '/assets/img (3).jpg'
    ]
  }
}
