<style src="../ShopStep/ShopStep.scss" lang="scss"/>

<template>
    <div>
        <v-list>
            <v-list-item

                    v-for="item in items"
                    :key="item.id"
            >
                <cart-item-menu :item="item" :editable="false"></cart-item-menu>
            </v-list-item>
        </v-list>
        <price-display></price-display>
    </div>
</template>
<script src="../ShopStep/ShopStep.ts"/>
