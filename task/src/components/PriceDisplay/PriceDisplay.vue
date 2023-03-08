<template>
    <div class="d-flex flex-column justify-center align-center" >
        <p class="text-h5" :style="[ hasDiscount ? {color: activeColor, textDecoration: activeDecoration} : '']">{{cartTotal}}</p>
        <p class="text-h4" v-if="hasDiscount">{{discountedPrice}}</p>
    </div>
</template>
<script src="./PriceDisplay.ts"/>
