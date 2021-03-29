<template>
    <vue-product-slider>
        <template slot="slider">
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"/>
            </div>
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"/>
            </div>
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2200&q=80"/>
            </div>
        </template>

        <template slot="thumbnails">
            <div class="thumb">
                <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"/>
            </div>
            <div class="thumb">
                <img src="https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"/>
            </div>
            <div class="thumb">
                <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2200&q=80"/>
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
