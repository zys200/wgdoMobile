import Vue from 'vue'
import App from './App.vue'
import '@/style.css'
import '@/static/iconfonts/index.css'
import 'amfe-flexible';
import router from '@/router/index.js'
import store from '@/store/index.js'
import {
  Swipe, SwipeItem, Tab, Tabs,
  Form, Field, Button, Checkbox, CheckboxGroup,
  Collapse, CollapseItem
} from 'vant';
import 'vant/lib/index.css';
import i18n from '@/lang/index.js';
import {
  Breadcrumb, BreadcrumbItem, Submenu,
  Col, Menu, MenuItem, MenuItemGroup
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { vfmPlugin } from 'vue-final-modal'

Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Form).use(Field).use(Button)
Vue.use(Breadcrumb).use(BreadcrumbItem).use(vfmPlugin).use(Checkbox).use(CheckboxGroup)
Vue.use(Collapse).use(CollapseItem).use(Submenu).use(Col).use(Menu).use(MenuItem).use(MenuItemGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')