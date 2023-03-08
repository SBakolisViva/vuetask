<style src="./PaymentStep.scss" lang="scss"/>
<template>
    <validation-observer ref="observer" v-slot="{invalid}">
        <v-form @submit.prevent="submitForm">
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            md="12"
                    >
                        <validation-provider rules="cardholder" v-slot="{ errors }" name="Cardholder Name">
                            <v-text-field
                                    v-model="cardHolderName"
                                    :counter="50"
                                    label="Cardholder Name"
                                    required
                            ></v-text-field>
                            <span style="color:red;">{{ errors[0] }}</span>
                        </validation-provider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                            cols="12"
                            md="12"
                    >
                        <validation-provider rules="cardnumber" v-slot="{ errors }" name="Card Number">
                            <v-text-field
                                    v-model="cardNumber"
                                    label="Card Number"
                                    required
                            ></v-text-field>
                            <span style="color:red;">{{ errors[0] }}</span>
                        </validation-provider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                            cols="12"
                            md="6"
                    >
                        <validation-provider rules="cardexpiry" v-slot="{ errors }">
                            <v-text-field
                                    v-model="cardExpiry"
                                    label="Expiry Date"
                                    required
                            ></v-text-field>
                            <span style="color:red;">{{ errors[0] }}</span>
                        </validation-provider>
                    </v-col>
                    <v-col>
                        <validation-provider rules="cardcvv" v-slot="{ errors }" name="CVV">
                            <v-text-field
                                    v-model="cardCVC"
                                    :counter="4"
                                    label="CVV"
                                    required
                            ></v-text-field>
                            <span style="color:red;">{{ errors[0] }}</span>
                        </validation-provider>
                    </v-col>
                </v-row>
                <v-col cols="auto">
                    <v-dialog
                            transition="dialog-top-transition"
                            max-width="800"
                    >
                        <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        min-width="100%"
                                        color="primary"
                                        v-bind="attrs"
                                        v-on="on"
                                        type="submit"
                                        :disabled="invalid"
                                >Submit
                                </v-btn>
                        </template>
                        <template v-slot:default="dialog">
                            <v-card>
                                <v-toolbar
                                        color="primary"
                                        dark
                                >Success!
                                </v-toolbar>
                                <v-card-text>
                                    <div class="text-h2 pa-12">Payment Complete.</div>
                                    <div class="text-h6 pl-12">Your data is handled by our trusted partners.</div>
                                </v-card-text>
                                <v-card-actions class="justify-end">
                                    <v-btn
                                            text
                                            @click="dialog.value = false"
                                    >Close
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-col>
            </v-container>
        </v-form>

    </validation-observer>

</template>
<script src="./PaymentStep.ts"/>
