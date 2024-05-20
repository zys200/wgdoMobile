import Vue from 'vue'
import vueRouter from 'vue-router'
import Home from '@/pages/Home/index.vue'

Vue.use(vueRouter)

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/Login/index.vue')
        }
    ]
})

export default router