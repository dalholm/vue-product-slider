<template>
  <div class="app">
    <!-- Header -->
    <div class="header">
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
    </div>

    <!-- Component Demo -->
    <div class="content">
      <h1>Just a list</h1>
      <p>This is about as minimal as it gets. We just render a list of individual items.</p>
      <ThumbnailSlider />
    </div>
  </div>
</template>

<script>

// import example components
import ThumbnailSlider from "./components/ThumbnailSlider";

// import styles
require('./assets/vue-nestable.css')
require('./assets/examples.css')

export default {
  name: 'App',

  components: {
    ThumbnailSlider
  }
}
</script>
