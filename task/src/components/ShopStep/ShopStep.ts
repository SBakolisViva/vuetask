import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { CartItem, CouponSelect } from '@/types';
import CartItemMenu from "../CartItemMenu/CartItemMenu.vue"
import PriceDisplay from "../PriceDisplay/PriceDisplay.vue"


@Component({
    data () {
        return {
            select: { value: '🍎 ILIKEAPPLES', info: 'Apples 30% off' },
            selectItems: [
                { value: '🍎 ILIKEAPPLES', info: 'Apples 30% off' },
                { value: '🌮 TACOTUESDAY', info: 'Everything 30% off' },
                { value: '🍰 HAPPYBIRTHDAY', info: 'Everything 50% off' },
            ],
            activeCoupon:""
        }
    },
   components:{CartItemMenu, PriceDisplay}
})
export default class ShopStep extends Vue {
    @Prop()
    items: { type: CartItem[], default: [] }
    @Prop()
    shopStep:boolean;
    
    select:CouponSelect;
    selectItems:CouponSelect[];
    activeCoupon:string;
    
    setActiveCoupon(){
        this.activeCoupon = this.select.value;
    }
}


