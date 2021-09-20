import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Button2 from './Button2'
import Checkbox from './Checkbox'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Button2,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
