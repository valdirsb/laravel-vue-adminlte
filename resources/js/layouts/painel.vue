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
// import '../admi-lte/lib/Tree'

import VANaviBar from '../admi-lte/NaviBar.vue'
import VASlider from '../admi-lte/Slider.vue'
import VAContentWrap from '../admi-lte/ContentWrap.vue'
import Modal from '../admi-lte/components/Modal.vue'
import store from '../admi-lte/vuex/store.js'
import slideMenuItems from '../admi-lte/lib/slideMenuItems.js'

export default {
  name: 'Painel',
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
