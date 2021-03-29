<template>
    <vue-product-slider>
        <template slot="slider">
            <div class="slide">
                <img src="/img/backpack-2.png"/>
            </div>
            <div class="slide">
                <img src="/img/backpack-2-1.png"/>
            </div>
            <div class="slide">
                <img src="/img/backpack-2-2.png"/>
            </div>
        </template>

        <template slot="thumbnails">
            <div class="thumb">
                <img src="/img/backpack-2.png"/>
            </div>
            <div class="thumb">
                <img src="/img/backpack-2-1.png"/>
            </div>
            <div class="thumb">
                <img src="/img/backpack-2-2.png"/>
            </div>
        </template>
    </vue-product-slider>
</template>

<script>
import {VueProductSlider} from '../../src/index'
export default {
    components: {
        VueProductSlider
    },
    data() {
        return {

        }
    }
}
</script>
