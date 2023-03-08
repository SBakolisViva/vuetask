<template>
    <v-stepper v-model="step">
        <v-stepper-header>
            <v-stepper-step
                    :complete="step > 1"
                    step="1"
            >
                Select
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                    :complete="step > 2"
                    step="2"
            >
                Preview
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
                Pay
            </v-stepper-step>
        </v-stepper-header>


        <v-stepper-items>
            <v-stepper-content step="1">
                <shop-step :items="finalData" shopStep="true"></shop-step>
            </v-stepper-content>

            <v-stepper-content step="2">
                <shop-step :items="finalData"></shop-step>
            </v-stepper-content>

            <v-stepper-content step="3">
                <payment-step></payment-step>
            </v-stepper-content>
        </v-stepper-items>
        <v-sheet class="d-flex justify-center mb-3">

            <v-btn
                    :disabled="step === 1"
                    class="mr-3"
                    color="primary"
                    @click="prevStep"
            >
                Previous
            </v-btn>


            <v-btn
                    :disabled="step === 3"
                    color="primary"
                    @click="nextStep"
            >
                Next
            </v-btn>

        </v-sheet>
    </v-stepper>
</template>
<script src="./StepWrapper.ts"></script>
