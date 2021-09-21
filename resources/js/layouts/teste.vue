<template>
    <div id="app">
      <div class="wrapper">
        <va-navibar></va-navibar>
        <va-slider :slideMenuItems="slideMenuItems"></va-slider>
        <va-content-wrap></va-content-wrap>
        <Modal></Modal>
      </div>
    </div>
</template>

<script>
// css files
import 'vue2-admin-lte/src/lib/css'

// import '../admi-lte/lib/css'

// js files
import 'vue2-admin-lte/src/lib/script'

// Global files
import 'vue2-admin-lte/src/lib/global'

import VANaviBar from '../admi-lte/NaviBar.vue'
import VASlider from '../admi-lte/Slider.vue'
import VAContentWrap from '../admi-lte/ContentWrap.vue'
import Modal from '../admi-lte/components/Modal.vue'
import store from '../admi-lte/vuex/store.js'
// import store from '../store'
import slideMenuItems from '../admi-lte/lib/slideMenuItems.js'

export default {
  name: 'teste',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  created () {
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  },
  store
}
</script>

<style>

</style>
