import { CartItem } from "./cartItem";
import { Foods } from "./food";

export class Cart {
    constructor() {
        this.getTotalPrice();
    }
    items: CartItem[] = [];
    getTotalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
            return totalPrice += item.getPrice();
        })
        return totalPrice;
    }
}