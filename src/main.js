import Vue from 'vue'
import App from './App.vue'
import '@/style.css'
import '@/static/iconfonts/index.css'
import 'amfe-flexible';
import router from '@/router/index.js'
import store from '@/store/index.js'
import { Swipe, SwipeItem, Tab, Tabs, Form, Field, Button, Popup } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Form).use(Field).use(Button).use(Popup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')