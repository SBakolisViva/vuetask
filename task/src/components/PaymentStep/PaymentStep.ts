import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import cardValidator from "card-validator"


extend('cardholder', {
    validate: value => {
        return cardValidator.cardholderName(value).isValid
    },
    computesRequired: true,
    message: '{_field_} needs to be a valid name. ({_value_})'
});

extend('cardnumber', {
    validate: value => {
        return cardValidator.number(value).isValid
    },
    computesRequired: true,
    message: '{_field_} needs to be a valid card number. ({_value_})'
});

extend('cardexpiry', {
    validate: value => {
        return cardValidator.expirationDate(value).isValid
    },
    computesRequired: true,
    message: '{_field_} needs to be a valid card number. ({_value_})'
});

extend('cardcvv', {
    validate: value => {
        return cardValidator.cvv(value).isValid
    },
    computesRequired: true,
    message: '{_field_} needs to be a valid card number. ({_value_})'
});

@Component({
    data() {
        return {
            cardHolderName: "",
            cardNumber: "",
            cardCVC: "",
            cardExpiry: ""
        }
    },
    components: {ValidationObserver, ValidationProvider}
})
export default class PaymentStep extends Vue {
    cardHolderName: string;
    cardNumber: string;
    cardCVC: number;
    cardExpiry: string;

    submitForm() {
        console.log("Submitted!")
    }

}


