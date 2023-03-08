import Vue from 'vue'
import Vuex from 'vuex'
import { CartItem } from "./types"
import { exists } from "./helpers/utils"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cart: Array<CartItem>()
    },
    getters: {
        getCart: (state) => {
            return state.cart;
        },
        getItem: (state) => (id) => {
            return state.cart.find(item => item.id === id);
        }
    },
    mutations: {
        cartAddition(state, item: CartItem) {
            const index = exists(state.cart, item);
            if (index > -1) {
                state.cart[index].quantity += item.quantity;
            } else {
                state.cart.push(item);
            }
        }
    }
})

