import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { formatPrice } from '@/helpers/utils';


@Component({
    data() {
        return {
            cartTotalDiscounted: 0,
            activeColor: 'green',
            activeDecoration: 'line-through'
        }
    },
    components: {}
})
export default class PriceDisplay extends Vue {
    @Prop()
    activeCoupon: string;

    cartDiscountTotal: number;

    get cartTotal(): string {
        return formatPrice(this.$store.getters.getCart.reduce((total, p) => total + p.price * p.quantity, 0) / 100);
    }

    get discountedPrice(): string {
        switch (this.activeCoupon) {
            case "🍎 ILIKEAPPLES":
                return formatPrice(this.$store.getters.getCart.reduce((total, p) => total + (p.id === "d65d349b-2a77-4fdb-9d7a-0ab85eb84fd1" ? (p.price * 0.7) * p.quantity : p.price * p.quantity), 0) / 100)
            case "🌮 TACOTUESDAY":
                return formatPrice(this.$store.getters.getCart.reduce((total, p) => total + (p.price * 0.7) * p.quantity, 0) / 100)
            case "🍰 HAPPYBIRTHDAY":
                return formatPrice(this.$store.getters.getCart.reduce((total, p) => total + (p.price * 0.5) * p.quantity, 0) / 100)
            default:
                return this.cartTotal;
        }
    }

    get hasDiscount(): boolean {
        return (this.cartTotal !== this.discountedPrice) && Number(this.cartTotal) !== 0;
    }
}


