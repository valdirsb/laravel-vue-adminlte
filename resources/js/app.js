/* import './admi-lte/lib/css'
import './admi-lte/lib/script'
import './admi-lte/lib/global' */

/* // css files
import 'vue2-admin-lte/src/lib/css'

// js files
import 'vue2-admin-lte/src/lib/script'

// Global files
import 'vue2-admin-lte/src/lib/global' */

import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'




import '~/plugins'
import '~/components'




import EventBus from './admi-lte/lib/eventBus.js'

Vue.config.productionTip = false

Vue.prototype.$bus = EventBus

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
