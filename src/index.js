import VueProductSlider from './VueProductSlider.vue'

// export named components
export {
  VueProductSlider
}

// export vue component installer
export default {
  install: function (Vue, options) {
    Vue.component('VueProductSlider', VueProductSlider)
  }
}
