import { CartItem } from "./cartItem";
import { Foods } from "./food";

export class Cart {
    // constructor(food: Foods) {
    //     this.food = food;
    //     // this.getPrice();

    // }
    items: CartItem[] = [];
    getTotalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
           return totalPrice += item.getPrice();
        })
        return totalPrice
    }
}