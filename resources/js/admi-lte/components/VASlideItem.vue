<template>
  <router-link tag="li" v-if="router && router.name" :to="router">
    <a href="#">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container" v-show="badge">
        <small class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
      </span>
    </a>
  </router-link>
  <li :class="getType" v-else>
    {{ isHeader ? name : '' }}
    <a href="#" v-if="!isHeader">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container">
        <small v-if="badge && badge.data" class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
        <i v-else class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" v-if="items.length > 0">
      <router-link tag="li" v-for="(item,index) in items" :data="item" :key="index" :to="item.router" v-if="item.router && item.router.name">
        <a>
          <i :class="item.icon"></i> {{ item.name }}
          <span class="pull-right-container">
            <small v-if="item.badge && item.badge.data" class="label pull-right" :class="[item.badge.type==='String'?'bg-red':'label-primary']">{{ item.badge.data }}</small>
            
          </span>
        </a>
      </router-link>
      <li :class="getType" v-else>
        {{ isHeader ? item.name : '' }}
        <a href="#" v-if="!isHeader">
          <i :class="item.icon"></i> <span>{{ item.name }}</span>
          <span class="pull-right-container">
            <small v-if="item.badge && item.badge.data" class="label pull-right" :class="[item.badge.type==='String'?'bg-green':'label-primary']">{{ item.badge.data }}</small>
            <i v-else class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu" v-if="item.items">
          <router-link tag="li" v-for="(item2,index) in item.items" :data="item2" :key="index" :to="item2.router" v-if="item2.router && item2.router.name">
            <a>
              <i :class="item2.icon"></i> {{ item2.name }}
              <span class="pull-right-container">
                <small v-if="item2.badge && item2.badge.data" class="label pull-right" :class="[item2.badge.type==='String'?'bg-green':'label-primary']">{{ item2.badge.data }}</small>
                
              </span>
            </a>
          </router-link>
          <li v-else>
            <a>
              <i :class="item2.icon"></i> {{ item2.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
// import '../lib/Tree'

export default {
  name: 'va-slide-item',
  props: {
    type: {
      type: String,
      default: 'item'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    badge: {
      type: Object,
      default () {
        return {}
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    router: {
      type: Object,
      default () {
        return {
          name: ''
        }
      }
    },
    link: {
      type: String,
      default: ''
    }
  },
  

  computed: {
    getType () {
      if (this.isHeader) {
        return 'header'
      }
      return this.type === 'item' ? '' : 'treeview'
    }
  }
}
</script>
