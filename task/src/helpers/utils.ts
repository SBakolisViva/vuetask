import { CartItem } from "../types";
import numeral from "numeral"
export function toCartItem(item: any) {
    const cartItem: CartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
    };
    return cartItem;
}

export function formatPrice(raw : number){
    return numeral(raw).format('$0,0.00');
}

export const exists = (cart: Array<CartItem>, cartItem: CartItem) => {
    //Cant use id because the id of the last 3 items is the same :(
    const index = cart.findIndex(
        (item) => item.id === cartItem.id
    );
    return index;
};
