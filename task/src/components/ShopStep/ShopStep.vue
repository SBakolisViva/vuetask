<style src="./ShopStep.scss" lang="scss"/>
<template>
    <div>
        <div v-if="!shopStep" class="d-flex flex-row">
            <v-select
                    v-model="select"
                    :hint="`${select.info}`"
                    :items="selectItems"
                    item-text="value"
                    item-value="info"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
            ></v-select>
            <v-btn
                    class="ml-3"
                    color="primary"
                    @click="setActiveCoupon"
            >
                Apply
            </v-btn>
        </div>
        <div>
        <div v-if="!items">
            <v-skeleton-loader v-for="i in 5"
                    class="mx-auto my-12"
                    max-width="80%"
                    type="list-item"
            ></v-skeleton-loader>
        </div>    
        <v-list>
            <v-list-item

                    v-for="item in items"
                    :key="item.id"
            >
                <cart-item-menu :item="item" :editable="shopStep"></cart-item-menu>
            </v-list-item>
            <price-display :activeCoupon="activeCoupon"></price-display>
        </v-list>
        </div>
    </div>
</template>
<script src="./ShopStep.ts"/>
