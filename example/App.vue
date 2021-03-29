<template>
    <div class="app">
        <!-- Header -->
        <header class="header">
            <h1>vue-product-slider</h1>

            <div class="command">
                npm install --save vue-product-slider
            </div>

            <div class="description">
                A product thumbnail slider and a product card slider
            </div>

            <section class="nav">
                <a href="https://github.com/dalholm/vue-product-slider#vue-product-slider">
                    Documentation
                </a>
                <a href="https://github.com/dalholm/vue-product-slider/issues">
                    Report an issue
                </a>
                <a href="https://www.npmjs.com/package/vue-product-slider">
                    Npm package
                </a>
            </section>
        </header>


        <main>
            <div class="container">
                <div class="example">
                    <div class="window">
                        <thumbnail-slider/>
                    </div>
                    <div class="info">
                        <h2>Product Thumbnail Slider</h2>
                        <p>Simple and easy to use vue product thumbnail slider</p>

                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>

// import example components
import ThumbnailSlider from "./components/ThumbnailSlider";

// import styles
require('./assets/examples.css')

export default {
    name: 'App',

    components: {
        ThumbnailSlider
    }
}
</script>
