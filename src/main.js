import Vue from 'vue'
import App from './App.vue'
import '@/style.css'
import '@/static/iconfonts/index.css'
import 'amfe-flexible';
import router from '@/router/index.js'
import { Swipe, SwipeItem, Tab, Tabs } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')