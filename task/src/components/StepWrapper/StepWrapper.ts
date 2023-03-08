import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios'
import { mockable } from '../../helpers/constants'
import { toCartItem } from '@/helpers/utils';
import { CartItem } from '@/types';
import ShopStep from "../ShopStep/ShopStep.vue"
import PaymentStep from "../PaymentStep/PaymentStep.vue"
@Component({
    data() {
        return {
            step: 1,
            rawData: null,
            finalData:null
        }
    },
    components:{ShopStep, PaymentStep}
})
export default class StepWrapper extends Vue {
    step: number;
    rawData: string;
    finalData:CartItem[];
    
    @Watch('rawData')
    onDataChanged(data:string|null, oldData:string){
        this.rawData !== null ? this.finalData = this.mapDataToCartItem(this.rawData):"";
        //console.log(this.finalData[0]);
    }
    
    beforeMount() {
        axios.get(`${mockable}products`)
            .then(response => {
                console.log(response.data);
                this.rawData = response.data;
            }, error => {
                console.log("Failed to fetch data.");
            });
    }

    mapDataToCartItem(data: any): CartItem[] {
        const typedData: CartItem[] = data.products.map((item: any) => toCartItem(item));
        return typedData;
    }

    nextStep(): number | null {
        console.log(this.step);
        return this.step < 3 ? this.step++ : null;
    }

    prevStep(): number | null {
        console.log(this.step);
        return this.step > 1 ? this.step-- : null;
    }
    

}
