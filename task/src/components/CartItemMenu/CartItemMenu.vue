<style src="./CartItemMenu.scss" lang="scss"/>
<template>
    
        <v-container class="d-flex flex-row justify-space-around align-center ma-1 pa-3" width="100%">
            <v-sheet class="d-flex flex-row name-group min-w-300px">
                <p class="mb-0 min-w-200px">{{ item.name }}</p>
                <p class="mb-0">{{ formatedPrice }}</p>
                
            </v-sheet>
            <v-sheet class="d-flex flex-row max-w-50">
                <v-btn
                        elevation="1"
                        medium
                        outlined
                        icon
                        color="primary"
                        @click="addQuantity"
                        v-if="editable"
                        
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-text-field class="mx-3" label="Quantity" variant="outlined" v-model='amount' v-if="editable"></v-text-field>
                <v-text-field class="mx-3" label="Quantity" variant="outlined" v-model='totalAmount' disabled v-else></v-text-field>
                <v-btn
                        elevation="1"
                        medium
                        outlined
                        icon
                        color="secondary"
                        @click="subQuantity"
                        v-if="editable"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
            </v-sheet>
            <v-sheet>
                <v-btn
                        elevation="1"
                        medium
                        outlined
                        icon
                        color="primary"
                        @click="addToCart(item)"
                        v-if="editable"
                >
                    <v-icon>mdi-cart-arrow-down</v-icon>
                </v-btn>
            </v-sheet>
        </v-container>
         
    
</template>
<script src="./CartItemMenu.ts"/>
