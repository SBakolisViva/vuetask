import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { CartItem } from '@/types';
import { formatPrice } from '@/helpers/utils';


@Component({
    data() {
        return {
            amount: 0,
           
        }
    }
})
export default class ShopStep extends Vue {
    @Prop()
    item: CartItem
    @Prop()
    editable: boolean
    
    amount: number
    
    
    get totalAmount():number{
      return this.$store.getters.getItem(this.item.id) ? this.$store.getters.getItem(this.item.id).quantity : 0;
    }
    
    get formatedPrice():string{
        return formatPrice(this.item.price/100);
    }
    addToCart(item: CartItem) {
        this.$store.commit('cartAddition', {
            id: this.item.id,
            name: this.item.name,
            quantity: this.amount,
            price: this.item.price
        } as CartItem)
        console.log(this.$store.state.cart);
    }

    addQuantity() {
        this.amount++;
    }

    subQuantity() {
        this.amount > 0 ? this.amount-- : this.amount;
    }

}


